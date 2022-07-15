const db = require('../../utils/db')
const UsuarioDAO = require('./usuario.dao')



function inserirCliente(cliente) {

    UsuarioDAO.inserirUsuario(cliente);

    connection = db.connect();
    let query = "INSERT INTO cliente (u_id) VALUES (?)";
    connection.query(query, cliente.id, function(err) {
        if(err) throw err;
    });

    connection.end();
}

/*
function listarUsuario(usuario) {
    connection = db.connect();
    let query = "SELECT * FROM usuario";
    let usuarios = [];

    connection.query(query, usuario, function(err, result) {
        if(err) throw err;
        console.log(result);
        //usuarios = result.map((tuple) => new Usuario(tuple));
    });
    //console.log(usuarios);
    connection.end();
    return usuarios;
}
*/

module.exports = {inserirCliente}