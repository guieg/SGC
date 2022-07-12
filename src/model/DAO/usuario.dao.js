const db = require('../../utils/db')
const Usuario = require('../usuario.model')


function inserirUsuario(usuario) {
    connection = db.connect();
    let query = "INSERT INTO usuario (username, senha, nome, cpf, email, telefone, endereco) VALUES ?";

    connection.query(query, usuario, function(err) {
        if(err) throw err;
    });

    connection.end();
}

function listarUsuario(usuario) {
    connection = db.connect();
    let query = "'SELECT * FROM usuario'";
    let usuarios = [];

    connection.query(query, usuario, function(err, result) {
        if(err) throw err;
        for (tuple in result) {
            usuarios.push(new Usuario(usuario));  
        }
    });

    connection.end();
    return usuarios;
}