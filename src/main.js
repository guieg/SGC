const Cliente = require('./model/cliente.model')
const usuarioDAO = require('./model/DAO/usuario.dao')
const clienteDAO = require('./model/DAO/cliente.dao')

/*
let novoCliente = new Cliente({username: 'Teste', senha: '1234', nome: 'Arlindo Menezes', cpf: '00000000000', email: "email@email.com", telefone: "0000000", endereco: "Casa"});

console.log(novoCliente);

usuarioDAO.inserirUsuario(novoCliente);

*/

let novoCliente = new Cliente({username: 'Teste', senha: '1234', nome: 'Arlindo Menezes', cpf: '00000000000', email: "email@email.com", telefone: "0000000", endereco: "Casa"});

console.log(novoCliente);

clienteDAO.inserirCliente(novoCliente);

//console.log(usuarioDAO.listarUsuario());

