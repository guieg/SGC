const usuarioDAO = require('../model/DAO/usuario.dao');
const Usuario = require('../model/usuario.model');


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



module.exports = {listarUsuarios, getUsuario, deleteUsuario, postUsuario}