const db = require('../../utils/db');
const Cliente = require('../cliente.model');
const Vendedor = require('../vendedor.model')
const UsuarioDAO = require('./usuario.dao')


async function updateVendedor(id, value) {
    let query = "UPDATE vendedor  WHERE u_id = " + db.mysql.escape(id) + " SET gerente = " + db.mysql.escape(value);
    connection = db.connect();
    connection.query(query, vendedor, function(err) {
        if(err) throw err;
    });
    connection.end();
}

async function inserirVendedor(vendedor) {
    let query = "INSERT INTO vendedor SET u_id = " + db.mysql.escape(vendedor.id) + ", gerente = " + db.mysql.escape(vendedor.gerente);
    connection = db.connect();
    connection.query(query);
    //connection.end();
    return vendedor.id;
}

async function listarVendedores() {
    let query = "SELECT * FROM vendedor";
    connection = db.connect();
    let response = await connection.query(query);
    //connection.end();
    let vendedores = [];
    for (let index = 0; index < response.length; index++) {
        vendedores.push(new Vendedor(response[index]));
    }
    return vendedores;
}

async function listarGerentes() {
    let query = "SELECT * FROM vendedor WHERE gerente";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendedores = [];
    for (let index = 0; index < response.length; index++) {
        vendedores.push(new Vendedor(response[index]));
    }
    return vendedores;
}

async function recuperaVendedorPorId(id) {
    let query = "SELECT * FROM vendedor WHERE `u_id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    return response[0];
}

async function deletaVendedorPorId(id) {
    let query = "DELETE FROM vendedor WHERE `u_id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let vendedores = [];
    for (let index = 0; index < response.length; index++) {
        vendedores.push(new Vendedor(response[index]));
    }
    return vendedores;
}


module.exports = {updateVendedor, listarGerentes, inserirVendedor, listarVendedores, recuperaVendedorPorId, deletaVendedorPorId}