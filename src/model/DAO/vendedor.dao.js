const db = require('../../utils/db');
const Cliente = require('../cliente.model');
const Vendedor = require('../vendedor.model')
const UsuarioDAO = require('./usuario.dao')


async function inserirVendedor(vendedor) {
    let query = "INSERT INTO vendedor SET ?";
    connection = db.connect();
    connection.query(query, vendedor, function(err) {
        if(err) throw err;
    });
    connection.end();
}

async function listarVendedor() {
    let query = "SELECT * FROM vendedor";
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
    let vendedor = [];
    for (let index = 0; index < response.length; index++) {
        vendedor.push(new Cliente(response[index]));
        
    }
    return vendedor;
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


module.exports = {inserirVendedor, listarVendedor, recuperaVendedorPorId, deletaVendedorPorId}