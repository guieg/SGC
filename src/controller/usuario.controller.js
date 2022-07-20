const usuarioDAO = require('../model/DAO/usuario.dao');
const Usuario = require('../model/usuario.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function listarUsuarios() {
    return usuarioDAO.listarUsuarios();
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
    return await usuarioDAO.inserirUsuario(novoUsuario);
}

async function cadastroUsuario(body, res) {
    let usuario = await usuarioDAO.recuperaUsuarioPorEmail(body.email);
    if (usuario != undefined) return  res.status(409).send({msg: 'Usuário já existe'});
    bcrypt.hash(body.senha, 10, (err, hash) => {
        if(err) return  res.status(500).send({msg:'Erro interno'});
        body.senha = hash;
        postUsuario(body);
    });
    return res.status(201).send({msg: 'OK'});
}

async function loginUsuario(body, res) {
    let usuario = await usuarioDAO.recuperaUsuarioPorEmail(body.email);
    if (usuario == undefined) return res.status(400).send({msg: 'Usuário não existe'});
    bcrypt.compare(body.senha, usuario.senha, (err) => {
        if (err) return res.status(401).send({msg: 'Senha incorreta'});
        const token = jwt.sign({id:usuario.id},'secrect',{ expiresIn: '1h' });
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
        const decoded = jwt.verify(token, 'secrect');
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



module.exports = {authToken, loginUsuario, cadastroUsuario, listarUsuarios, getUsuario, deleteUsuario, postUsuario}