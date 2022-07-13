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

function listarUsuario(usuario) {
    connection = db.connect();
    let query = "SELECT * FROM usuario";
    let usuarios = [];

    connection.query(query, usuario, function(err, result) {
        if(err) throw err;
        usuarios = result.map((tuple) => new Usuario(tuple));
    });
    //console.log(usuarios);
    connection.end();
    return usuarios;
}

module.exports = {inserirUsuario, listarUsuario}