const express = require('express');
const session = require("express-session");
const path = require('path');
const app = express();

//require do bodyparser responsável por capturar valores do form
const bodyParser = require("body-parser");

//require do mysql
const mysql = require("mysql"); 
const { resolveSoa } = require('dns');


function conectiondb(){
    var con = mysql.createConnection({
        host: 'localhost', // O host do banco. Ex: localhost
        user: 'root', // Um usuário do banco. Ex: user 
        password: '010203', // A senha do usuário. Ex: user123
        database: 'sgc' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
    });
    
    //verifica conexao com o banco
    con.connect((err) => {
        if (err) {
            console.log('Erro connecting to database...', err)
            return
        }
        console.log('Connection established!')
    });

    return con;
}

var con = conectiondb()

var query = 'SELECT * FROM cliente'

con.query(query, function(err, results) {
    console.log(results)
})


var query2 = "INSERT INTO usuario VALUES (103, 'teste', 'teste', 'teste', '00000000000', 'teste@teste.com', '2109210', 'casa');"


con.query(query, function(err, results) {
    if(err) throw(err);
    else console.log(results)
})


con.query(query, function(err, results) {
    console.log(results)
})

con.end()