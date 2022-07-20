const db = require('../../utils/db')
const Automovel = require('../automovel.model')

function inserirAutomovel(automovel) {
    let query = "INSERT INTO automovel SET ?";
    connection = db.connect();
    connection.query(query, automovel, function(err) {
        if(err) throw err;
    });

    connection.end();
}

async function listarAutomoveis() {
    let query = "SELECT * FROM automovel";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

async function recuperaAutomovelPorChassi(chassi) {
    let query = "SELECT * FROM automovel WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

async function deletaAutomovelPorChassi(chassi) {
    let query = "DELETE FROM automovel WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

module.exports = {inserirAutomovel, listarAutomoveis, recuperaAutomovelPorChassi, deletaAutomovelPorChassi}