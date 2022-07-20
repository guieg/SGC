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
        automoveis.push(new Vendas(response[index]));
        
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
    return Vendas;
}

module.exports = {inserirVendas, listarVendas, recuperaVendasPorNF, deletaVendasPorNF}