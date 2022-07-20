const db = require('../../utils/db')
const ModeloFabricante = require('../modelo_fabricante.model')

async function inserirModeloFabricante(mf) {
    let query = "INSERT INTO modelo_fabricante SET ?";
    connection = db.connect();
    connection.query(query, mf, function(err) {
        if(err) throw err;
    });

    connection.end();
}

async function listarModeloFabricante() {
    let query = "SELECT * FROM modelo_fabricante";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let mfs = [];
    for (let index = 0; index < response.length; index++) {
        mfs.push(new ModeloFabricante(response[index]));
        
    }
    return mfs;
}

async function recuperaMFPorModelo(modelo) {
    let query = "SELECT * FROM modelo_fabricante WHERE `modelo` = "+ db.mysql.escape(modelo);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let mfs = [];
    for (let index = 0; index < response.length; index++) {
        mfs.push(new ModeloFabricante(response[index]));
        
    }
    return mfs;
}

async function deletaMFPorModelo(modelo) {
    let query = "DELETE FROM modelo_fabricante WHERE `modelo` = "+ db.mysql.escape(modelo);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let mfs = [];
    for (let index = 0; index < response.length; index++) {
        mfs.push(new ModeloFabricante(response[index]));
        
    }
    return mfs;
}

async function updateMFFabricante(modelo, fabricante) {
    let query = "UPDATE modelo_fabricante SET 'fabricante' = " + db.mysql.escape(fabricante) + "WHERE `modelo` = "+ db.mysql.escape(modelo);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let mfs = [];
    for (let index = 0; index < response.length; index++) {
        mfs.push(new ModeloFabricante(response[index]));
        
    }
    return mfs;
}

module.exports = {inserirModeloFabricante, listarModeloFabricante, recuperaMFPorModelo, deletaMFPorModelo, updateMFFabricante}