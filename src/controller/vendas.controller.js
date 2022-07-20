const Vendas = require('../model/vendas.model')
const vendasDAO = require('../model/DAO/vendas.dao');


async function listarVendas() {
    return vendasDAO.listarVendas();
}

async function getVenda(nf) {
    return await vendasDAO.recuperaVendaPorNF(nf);
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

async function updateVendasFormaPagamento(nf, fp) {
    return await vendasDAO.updateVendasFormaPagamento(nf, fp);
}

async function postVenda(body) {
    let novaVenda = new Venda({num_nota_fiscal: body.num_nota_fiscal, c_id: body.c_id, v_id: body.v_id, data: body.data, forma_pagamento: body.forma_pagamento});
    return await vendasDAO.inserirVenda(novaVenda);
}



module.exports = {listarVendas, getVenda, deleteVenda, updateVendaCID, updateVendaVID, updateVendasFormaPagamento, postVenda}