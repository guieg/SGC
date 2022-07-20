const db = require('../../utils/db')
const Itens = require('../itens.model')

async function inserirItem(itens) {
    let query = "INSERT INTO itens SET ?";
    connection = db.connect();
    connection.query(query, itens, function(err) {
        if(err) throw err;
    });

    connection.end();
}

async function listarItens() {
    let query = "SELECT * FROM itens";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let itens = [];
    for (let index = 0; index < response.length; index++) {
        itens.push(new Itens(response[index]));
        
    }
    return itens;
}

async function recuperaItemPorID(id) {
    let query = "SELECT * FROM itens WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let itens = [];
    for (let index = 0; index < response.length; index++) {
        itens.push(new Itens(response[index]));
        
    }
    return itens;
}

async function deletaItemPorID(id) {
    let query = "DELETE FROM itens WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        itens.push(new Itens(response[index]));
        
    }
    return itens;
}

async function updateItemNome(id, nome) {
    let query = "UPDATE itens SET 'nome' = " + db.mysql.escape(nome) + "WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let itens = [];
    for (let index = 0; index < response.length; index++) {
        itens.push(new Itens(response[index]));
        
    }
    return itens;
}

async function updateItemDescricao(id, descricao) {
    let query = "UPDATE itens SET 'descricao' = " + db.mysql.escape(descricao) + "WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let itens = [];
    for (let index = 0; index < response.length; index++) {
        itens.push(new Itens(response[index]));
        
    }
    return itens;
}

async function updateItemChassi(id, a_chassi) {
    let query = "UPDATE itens SET 'a_chassi' = " + db.mysql.escape(a_chassi) + "WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let itens = [];
    for (let index = 0; index < response.length; index++) {
        itens.push(new Itens(response[index]));
        
    }
    return itens;
}

module.exports = {inserirItem, listarItens, recuperaItemPorID, deletaItemPorID, updateItemNome, updateItemDescricao, updateItemDescricao, updateItemChassi}