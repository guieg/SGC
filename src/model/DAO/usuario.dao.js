const db = require('../../utils/db');
const Usuario = require('../usuario.model');



function inserirUsuario(usuario) {
    connection = db.connect();
    let query = "INSERT INTO usuario SET ?";
    connection.query(query, usuario, function(err) {
        if(err) throw err;
    });

    connection.end();
}

function consultaUsuario(id) {
    connection = db.connectSync();
    let query;
    if (id == undefined) {
       query = "SELECT * FROM usuario"
    } else {
        query = "SELECT * FROM usuario WHERE id = " + db.mysql.escape(id);
    }
    let  usuarios = connection.query(query);
    let lista = [];
    for (let index = 0; index < usuarios.length; index++) {
        lista.push(new Usuario( usuarios[index]));
    }    
    
    return lista;

}

module.exports = {inserirUsuario, consultaUsuario}