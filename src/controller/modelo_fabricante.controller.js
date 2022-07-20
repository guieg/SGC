const ModeloFabricante = require('../model/modelo_fabricante.model')
const modeloFabricanteDAO = require('../model/DAO/modelo_fabricante.dao');

async function listarModeloFabricante() {
    return await modeloFabricanteDAO.listarModeloFabricante();
}

async function getModeloFabricante(modelo) {
    return await modeloFabricanteDAO.recuperaMFPorModelo(modelo);
}

async function deleteModeloFabricante(modelo) {
    return await modeloFabricanteDAO.deletaMFPorModelo(modelo);
}

async function updateMFFabricante(modelo, fabricante) {
    return await modeloFabricanteDAO.updateMFFabricante(modelo, fabricante);
}

async function postModeloFabricante(body) {
    let novoModeloFabricante = new ModeloFabricante({modelo: body.modelo, fabricante: body.fabricante});
    return await modeloFabricanteDAO.inserirModeloFabricante(novoModeloFabricante);
}



module.exports = {listarModeloFabricante, getModeloFabricante, deleteModeloFabricante, updateMFFabricante, postModeloFabricante}