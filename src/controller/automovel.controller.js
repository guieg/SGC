const Automovel = require('../model/automovel.model')
const automovelDAO = require('../model/DAO/automovel.dao');
const modeloFabricanteDAO = require('../model/DAO/modelo_fabricante.dao');
const vendasDAO = require('../model/DAO/vendas.dao');


async function listarAutomoveis() {
    return await automovelDAO.listarAutomoveis();
}

async function listarAutomoveisVendidos() {
    return await automovelDAO.listarAutomoveisVendidos();
}

async function listarAutomoveisAVenda() {
    return await automovelDAO.listarAutomoveisAVenda();
}

async function getAutomovel(chassi) {
    return await automovelDAO.recuperaAutomovelPorChassi(chassi);
}

async function deleteAutomovel(chassi) {
    return await automovelDAO.deletaAutomovelPorChassi(chassi);
}

async function updateAutomovelCor(chassi, cor) {
    return await automovelDAO.updateAutomovelCor(chassi, cor);
}

async function updateAutomovelAno(chassi, ano) {
    return await automovelDAO.updateAutomovelAno(chassi, ano);
}

async function updateAutomovelValor(chassi, valor) {
    return await automovelDAO.updateAutomovelValor(chassi, valor);
}

async function updateAutomovelMFModelo(chassi, modelo) {
    let mf = await modeloFabricanteDAO.recuperaMFPorModelo(modelo);
    if (mf == undefined) return res.status(400).send({msg: 'Modelo não existe'});
    return await automovelDAO.updateAutomovelMFModelo(chassi, modelo);
}

async function updateAutomovelVNF(chassi, nf) {
    return await automovelDAO.updateAutomovelVNF(chassi, nf);
}

async function postAutomovel(body) {
    let novoAutomovel = new Automovel({chassi: body.chassi, cor: body.cor, ano: body.ano, valor: body.valor, mf_modelo: body.mf_modelo, v_nf: body.v_nf});
    return await automovelDAO.inserirAutomovel(novoAutomovel);
}



module.exports = {listarAutomoveisVendidos, listarAutomoveisAVenda, listarAutomoveis, getAutomovel, deleteAutomovel, updateAutomovelCor, updateAutomovelAno, updateAutomovelValor, updateAutomovelMFModelo, updateAutomovelVNF, postAutomovel}