const db = require('../../utils/db')
const Vendas = require('../vendas.model')

function inserirVenda(vendas) {
    let query = "INSERT INTO vendas SET ?";
    connection = db.connect();
    connection.query(query, vendas, function(err) {
        if(err) throw err;
    });

    connection.end();
}

async function listarVendas() {
    let query = "SELECT * FROM vendas";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

async function recuperaVendasPorNF(num_nota_fiscal) {
    let query = "SELECT * FROM vendas WHERE `num_nota_fiscal` = "+ db.mysql.escape(num_nota_fiscal);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

async function deletaVendasPorNF(num_nota_fiscal) {
    let query = "DELETE FROM vendas WHERE `num_nota_fiscal` = "+ db.mysql.escape(num_nota_fiscal);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

async function updateVendasCID(num_nota_fiscal, c_id) {
    let query = "UPDATE vendas SET 'c_id' = " + db.mysql.escape(c_id) + "WHERE `num_nota_fiscal` = "+ db.mysql.escape(num_nota_fiscal);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

async function updateVendasVID(num_nota_fiscal, v_id) {
    let query = "UPDATE vendas SET 'v_id' = " + db.mysql.escape(v_id) + "WHERE `num_nota_fiscal` = "+ db.mysql.escape(num_nota_fiscal);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

async function updateVendasData(num_nota_fiscal, data) {
    let query = "UPDATE vendas SET 'data' = " + db.mysql.escape(data) + "WHERE `num_nota_fiscal` = "+ db.mysql.escape(num_nota_fiscal);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

async function updateVendasFormaPagamento(num_nota_fiscal, forma_pagamento) {
    let query = "UPDATE vendas SET 'forma_pagamento' = " + db.mysql.escape(forma_pagamento) + "WHERE `num_nota_fiscal` = "+ db.mysql.escape(num_nota_fiscal);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendas = [];
    for (let index = 0; index < response.length; index++) {
        vendas.push(new Vendas(response[index]));
        
    }
    return vendas;
}

module.exports = {inserirVenda, listarVendas, recuperaVendasPorNF, deletaVendasPorNF, updateVendasCID, updateVendasVID, updateVendasData, updateVendasFormaPagamento}