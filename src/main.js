const Cliente = require('./model/cliente.model')
const usuarioDAO = require('./model/DAO/usuario.dao')


async function main() {
    let novoCliente = new Cliente({username: 'Teste', senha: '1234', nome: 'Teste', cpf: '00000000000', email: "email@email.com", telefone: "0000000", endereco: "Casa"});
    //console.log(novoCliente);
    
    //usuarioDAO.inserirUsuario(novoCliente);
    let teste;
    teste = await usuarioDAO.listarUsuario();
    console.log(teste);

  }
  
  if (require.main === module) {
    main();
  }

