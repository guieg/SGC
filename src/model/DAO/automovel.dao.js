const db = require('../../utils/db')
const Automovel = require('../automovel.model')

async function inserirAutomovel(automovel) {
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

async function updateAutomovelCor(chassi, cor) {
    let query = "UPDATE automovel SET 'cor' = " + db.mysql.escape(cor) + "WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

async function updateAutomovelAno(chassi, ano) {
    let query = "UPDATE automovel SET 'ano' = " + db.mysql.escape(ano) + "WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

async function updateAutomovelValor(chassi, valor) {
    let query = "UPDATE automovel SET 'valor' = " + db.mysql.escape(valor) + "WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

async function updateAutomovelMFModelo(chassi, mf_modelo) {
    let query = "UPDATE automovel SET 'mf_modelo' = " + db.mysql.escape(mf_modelo) + "WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

async function updateAutomovelVNF(chassi, v_nf) {
    let query = "UPDATE automovel SET 'v_nf' = " + db.mysql.escape(v_nf) + "WHERE `chassi` = "+ db.mysql.escape(chassi);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let automoveis = [];
    for (let index = 0; index < response.length; index++) {
        automoveis.push(new Automovel(response[index]));
        
    }
    return automoveis;
}

module.exports = {inserirAutomovel, listarAutomoveis, recuperaAutomovelPorChassi, deletaAutomovelPorChassi, updateAutomovelCor, updateAutomovelAno, updateAutomovelValor, updateAutomovelMFModelo, updateAutomovelVNF}