const Cliente = require('../model/cliente.model')
const clienteDAO = require('../model/DAO/cliente.dao');


async function listarClientes() {
    return clienteDAO.listarClientes();
}

async function getCliente(id) {
    return await clienteDAO.recuperaClientePorId(id);
}


async function deleteCliente(id) {
    return await clienteDAO.deletaClienteUsuarioPorId(id);
}


async function postCliente(body) {
    let novoCliente = new Cliente({id: body.id});
    return await clienteDAO.inserirCliente(novoCliente);
}



module.exports = {listarClientes, getCliente, deleteCliente, postCliente}