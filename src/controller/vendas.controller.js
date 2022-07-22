const Vendas = require('../model/vendas.model')
const vendasDAO = require('../model/DAO/vendas.dao');
const automovelController = require('../controller/automovel.controller');


async function listarVendas() {
    return vendasDAO.listarVendas();
}

async function getVenda(nf) {
    return await vendasDAO.recuperaVendasPorNF(nf);
}

async function deleteVenda(nf) {
    return await vendasDAO.deletaVendasPorNF(nf);
}

async function updateVendaCID(nf, cid) {
    return await vendasDAO.updateVendasCID(nf, cid);
}

async function updateVendaVID(nf, vid) {
    return await vendasDAO.updateVendasVID(nf, vid);
}

async function updateVendasData(nf, data) {
    return await vendasDAO.updateVendasData(nf, data);
}

async function updateVendasFormaPagamento(nf, fp) {
    return await vendasDAO.updateVendasFormaPagamento(nf, fp);
}

async function postVenda(body) {
    let nfe = "NFE-" + Math.floor(Math.random() * (999999- 100000) + 100000);
    while ((await vendasDAO.recuperaVendasPorNF(nfe)).length != 0) {
        nfe = "NFE-" +  Math.floor(Math.random() * (999999- 100000) + 100000);
    }
    let novaVenda = new Vendas({num_nota_fiscal: nfe, c_id: body.c_id, v_id: body.v_id, data: new Date(), forma_pagamento: body.forma_pagamento});
    await vendasDAO.inserirVenda(novaVenda);
    return await automovelController.updateAutomovelVNF(body.chassi, nfe);
}



module.exports = {listarVendas, getVenda, deleteVenda, updateVendaCID, updateVendaVID, updateVendasData, updateVendasFormaPagamento, postVenda}