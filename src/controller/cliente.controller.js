const Cliente = require('../model/cliente.model')
const clienteDAO = require('../model/DAO/cliente.dao');
const usuarioDAO = require('../model/DAO/usuario.dao')


async function listarClientes() {
    return await clienteDAO.listarClientes();
}

async function getCliente(id) {
    return await clienteDAO.recuperaClientePorId(id);
}

async function deleteCliente(id) {
    await clienteDAO.deletaClientePorId(id);
    return await usuarioDAO.deletaUsuarioPorId(id);
}

async function postCliente(body) {
    let novoCliente = new Usuario({id: body.id});
    return await clienteDAO.inserirCliente(novoCliente);
}


module.exports = {listarClientes, getCliente, deleteCliente, postCliente}