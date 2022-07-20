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
    if (usuario) return 409;
    bcrypt.hash(body.senha, 10, (err, hash) => {
        if(err) return 500;
        body.senha = hash;
        postUsuario(body);
    });
    
}



module.exports = {cadastroUsuario, listarUsuarios, getUsuario, deleteUsuario, postUsuario}