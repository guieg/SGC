const vendedorDAO = require('../model/DAO/vendedor.dao');
const Vendedor = require('../model/vendedor.model');


async function listarVendedores() {
    return vendedorDAO.listarvendedors();
}

async function getVendedor(id) {
    return await vendedorDAO.recuperaVendedorPorId(id);
}


async function deleteVendedor(id) {
    return await vendedorDAO.deletaVendedorPorId(id);
}


async function postVendedor(body) {
    let novoVendedor = new Vendedor({id: body.id, isGerente: body.isGerente});
    return await vendedorDAO.inserirVendedor(novoVendedor);
}



module.exports = {listarVendedores, getVendedor, deleteVendedor, postVendedor}