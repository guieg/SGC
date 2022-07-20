const usuarioDAO = require('../model/DAO/usuario.dao');
const Usuario = require('../model/usuario.model');
const bcrypt = require('bcryptjs');


async function listarUsuarios() {
    return usuarioDAO.listarUsuarios();
}

async function getUsuario(id) {
    return await usuarioDAO.recuperaUsuarioPorId(id);
}


async function deleteUsuario(id) {
    return await usuarioDAO.deletaUsuarioPorId(id);
}


async function postUsuario(body) {
    let novoUsuario = new Usuario({username: body.username, senha: body.senha, nome: body.nome, cpf: body.cpf, email: body.email, telefone: body.telefone, endereco: body.endereco});
    return await usuarioDAO.inserirUsuario(novoUsuario);
}

async function cadastroUsuario(body) {
    let usuario = usuarioDAO.recuperaUsuarioPorEmail(body.email);
    if (usuario) return {code: 409, msg: 'Usuário já existe'};
    bcrypt.hash(body.senha, 10, (err, hash) => {
        if(err) return {code: 500, msg:'Erro interno'};
        body.senha = hash;
        postUsuario(body);
    });
    return {msg: 201, msg: 'OK'};
}

async function loginUsuario(body) {
    let usuario = usuarioDAO.recuperaUsuarioPorEmail(body.email);
    if (!usuario) return {code: 400, msg: 'Usuário não existe'};
    bcrypt.compare(body.senha, usuario.senha, (err) => {
        if (err) return {code: 401, msg: 'Senha incorreta'};
        const token = jwt.sign({id:usuario.id},'secrect',{ expiresIn: '1h' });
        return {msg: 201, msg: 'OK', token};
    });
    
}



module.exports = {loginUsuario, cadastroUsuario, listarUsuarios, getUsuario, deleteUsuario, postUsuario}