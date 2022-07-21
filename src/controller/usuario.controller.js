const usuarioDAO = require('../model/DAO/usuario.dao');
const Usuario = require('../model/usuario.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const vendedorController = require('./vendedor.controller');
const clienteController = require('./cliente.controller');
const { recuperaClientePorId } = require('../model/DAO/cliente.dao');
const auth = require('../utils/auth');

async function checaVendedor(id) {
    let vendedores = await vendedorController.listarVendedores();
    idsVendedores = vendedores.map((vendedor) => vendedor.u_id);
    return idsVendedores.includes(id);
}

async function checaGerente(id) {
    let gerentes = await vendedorController.listarGerentes();
    idsGerentes = gerentes.map((gerente) => gerente.u_id);
    return idsGerentes.includes(id);
}

async function listarUsuarios() {
    return await usuarioDAO.listarUsuarios();
}

async function getUsuario(id) {
    return await usuarioDAO.recuperaUsuarioPorId(id);
}


async function deleteUsuario(id) {
    if(await usuarioDAO.recuperaUsuarioPorId(id) != undefined) return await usuarioDAO.deletaUsuarioPorId(id)
    return undefined;
}


async function postUsuario(body) {
    let novoUsuario = new Usuario({username: body.username, senha: body.senha, nome: body.nome, cpf: body.cpf, email: body.email, telefone: body.telefone, endereco: body.endereco});
    await usuarioDAO.inserirUsuario(novoUsuario);
}

async function cadastroUsuario(body, res) {
    let usuario = await usuarioDAO.recuperaUsuarioPorEmail(body.email);
    if (usuario != undefined) return  res.status(409).send({msg: 'Usuário já existe'});
    bcrypt.hash(body.senha, 10, async (err, hash) => {
        if(err) return  res.status(500).send({msg:'Erro interno'});
        try{
            body.senha = hash;
            await postUsuario(body);
            let novoUsuario = await usuarioDAO.recuperaUsuarioPorEmail(body.email);
            if (body.role == 'Vendedor') await vendedorController.postVendedor({id: novoUsuario.id, gerente: 0});
            else if (body.role == 'Gerente') await vendedorController.postVendedor({id: novoUsuario.id, gerente: 1});
            else await clienteController.postCliente({id: novoUsuario.id});
        }catch(e){
            console.log(e);
        }
    });
    return res.status(201).send({msg: 'OK'});
}

async function loginUsuario(body, res) {
    let usuario = await usuarioDAO.recuperaUsuarioPorEmail(body.email);
    if (usuario == undefined) return res.status(400).send({msg: 'Usuário não existe'});
    bcrypt.compare(body.senha, usuario.senha, (err) => {
        if (err) return res.status(401).send({msg: 'Senha incorreta'});
        const token = jwt.sign({id:usuario.id}, auth.jwtSecretKey,{ expiresIn: '1h' });
        return res.status(201).send({msg: 'OK', token});
    });
    
}

async function authToken(req) {
    if(
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ){
        return false;
    }
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, auth.jwtSecretKey);
        let usuario = await usuarioDAO.recuperaUsuarioPorId(decoded.id);
        if (usuario != undefined) {
            return decoded;
        }
    }
    catch (e){
        console.log(e);
    }
    return false;
    
}



module.exports = {checaGerente, checaVendedor, authToken, loginUsuario, cadastroUsuario, listarUsuarios, getUsuario, deleteUsuario, postUsuario}