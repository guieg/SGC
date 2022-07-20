const db = require('../../utils/db')
const Cliente = require('../cliente.model')
const UsuarioDAO = require('./usuario.dao')


async function inserirCliente(cliente) {
    let query = "INSERT INTO cliente SET ?";
    connection = db.connect();
    connection.query(query, cliente, function(err) {
        if(err) throw err;
    });
    connection.end();
}

async function listarCliente() {
    let query = "SELECT * FROM cliente";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let clientes = [];
    for (let index = 0; index < response.length; index++) {
        clientes.push(new Cliente(response[index]));
    }
    return clientes;
}

async function deletaClientePorId(id) {
    let query = "DELETE FROM cliente WHERE `u_id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let clientes = [];
    for (let index = 0; index < response.length; index++) {
        clientes.push(new Cliente(response[index]));
    }
    return clientes;
}


module.exports = {inserirCliente, listarCliente, deletaClientePorId}