const db = require('../../utils/db')
const Usuario = require('../usuario.model')

function inserirUsuario(usuario) {
    let query = "INSERT INTO usuario SET ?";
    connection = db.connect();
    connection.query(query, usuario, function(err) {
        if(err) throw err;
    });

    connection.end();
}

async function listarUsuarios() {
    let query = "SELECT * FROM usuario";
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let usuarios = [];
    for (let index = 0; index < response.length; index++) {
        usuarios.push(new Usuario(response[index]));
        
    }
    return usuarios;
}


async function recuperaUsuarioPorId(id) {
    let query = "SELECT * FROM usuario WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let usuarios = [];
    for (let index = 0; index < response.length; index++) {
        usuarios.push(new Usuario(response[index]));
        
    }
    return usuarios;
}

async function deletaUsuarioPorId(id) {
    let query = "DELETE FROM usuario WHERE `id` = "+ db.mysql.escape(id);
    connection = db.connect();
    let response = await connection.query(query);
    connection.end();
    let usuarios = [];
    for (let index = 0; index < response.length; index++) {
        usuarios.push(new Usuario(response[index]));
        
    }
    return usuarios;
}

module.exports = {inserirUsuario, listarUsuarios, recuperaUsuarioPorId, deletaUsuarioPorId}