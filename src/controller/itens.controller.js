const Itens = require('../model/itens.model')
const itensDAO = require('../model/DAO/itens.dao');
const Automovel = require('../model/automvel.model');
const automovelDAO = require('../model/DAO/automovel.dao');


async function listarItens() {
    return await itensDAO.listarItens();
}

async function getItem(id) {
    return await itensDAO.recuperaItemPorID(id);
}

async function deleteItem(id) {
    return await itensDAO.deletaItemPorID(id);
}

async function updateItemNome(id, nome) {
    return await itensDAO.updateItemNome(id, nome);
}

async function updateItemDescricao(id, desc) {
    return await itensDAO.updateItemDescricao(id, desc);
}

async function updateItemChassi(id, chassi) {
    let automovel = await automovelDAO.recuperaAutomovelPorChassi(body.chassi);
    if (automovel == undefined) return res.status(400).send({msg: 'Automóvel não existe'});
    return await itensDAO.updateItemChassi(id, chassi);
}

async function postItem(body) {
    let novoItem = new Item({id: body.id, nome: body.nome, descricao: body.descricao, a_chassi: body.a_chassi});
    return await itensDAO.inserirItem(novoItem);
}



module.exports = {listarItens, getItem, deleteItem, updateItemNome, updateItemDescricao, updateItemChassi, postItem}