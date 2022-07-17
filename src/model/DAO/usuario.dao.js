const db = require('../../utils/db')
const Usuario = require('../usuario.model')
const Promise = require('bluebird');



function inserirUsuario(usuario) {
    connection = db.connect();
    let query = "INSERT INTO usuario SET ?";
    connection.query(query, usuario, function(err) {
        if(err) throw err;
    });

    connection.end();
}

function listarUsuario(usuario) {
    connection = db.connectSync();
    let query = "SELECT * FROM usuario";
    let  usuarios = [];


    usuarios = connection.query(query);
    return usuarios;

}

module.exports = {inserirUsuario, listarUsuario}