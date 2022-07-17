const mysql = require("mysql");
const syncSql = require("sync-mysql")


const config = {
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '010203', // A senha do usuário. Ex: user123
    database: 'sgc' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
}

function connect(){
    var con = mysql.createConnection(config);
    
    //verifica conexao com o banco
    con.connect((err) => {
        if (err) {
            console.log('Erro connecting to database...', err);
            return;
        }
        console.log('Connection established!');
    });

    return con;
}


function connectSync(){
    return new syncSql(config);
}

module.exports = {connect, connectSync}