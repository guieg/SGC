const db = require('../../utils/db')
const Usuario = require('../usuario.model')



function inserirUsuario(usuario) {
    connection = db.connect();
    let query = "INSERT INTO usuario SET ?";
    connection.query(query, usuario, function(err) {
        if(err) throw err;
    });

    connection.end();
}

async function listarUsuario(usuario) {
    connection = db.connect();
    let query = "SELECT * FROM usuario";
    let response = await connection.query(query);
    connection.end();
    let usuarios = [];
    for (let index = 0; index < response.length; index++) {
        usuarios.push(new Usuario(response[index]));
        
    }
    return usuarios;
}

module.exports = {inserirUsuario, listarUsuario}