const Cliente = require('./model/cliente.model')
const usuarioDAO = require('./model/DAO/usuario.dao')


let novoCliente = new Cliente({username: 'Krlnhz', senha: '1234', nome: 'Arlindo Menezes', cpf: '00000000000', email: "email@email.com", telefone: "0000000", endereco: "Casa"});

console.log(novoCliente);

//usuarioDAO.inserirUsuario(novoCliente);
console.log(usuarioDAO.listarUsuario());

