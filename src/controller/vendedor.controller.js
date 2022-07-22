const vendedorDAO = require('../model/DAO/vendedor.dao');
const Vendedor = require('../model/vendedor.model');

async function promoverVendedor(id) {
    return await vendedorDAO.updateVendedor(id, true);
} 

async function rebaixarVendedor(id) {
    return await vendedorDAO.updateVendedor(id, false);
} 

async function recuperaVendedorPorid(id) {
    return await vendedorDAO.recuperaVendedorPorId(id);
}

async function recuperaGerentePorid(id) {
    return await vendedorDAO.recuperaGerentePorId(id);
} 

async function listarGerentes(){
    return await vendedorDAO.listarGerentes();
}

async function listarVendedores() {
    return await vendedorDAO.listarVendedores();
}

async function getVendedor(id) {
    return await vendedorDAO.recuperaVendedorPorId(id);
}


async function deleteVendedor(id) {
    return await vendedorDAO.deletaVendedorPorId(id);
}


async function postVendedor(body) {
    let novoVendedor = new Vendedor({id: body.id, gerente: body.gerente});
    return await vendedorDAO.inserirVendedor(novoVendedor);
}



module.exports = {recuperaGerentePorid, recuperaVendedorPorid, rebaixarVendedor, promoverVendedor, listarGerentes, listarVendedores, getVendedor, deleteVendedor, postVendedor}