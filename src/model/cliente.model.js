const Usuario = require('./usuario.model')

module.exports = class Cliente extends Usuario {
    //propriedades e funções da classe aqui
    constructor(id, username, senha, nome, cpf, email, telefone, endereco) {
        super(id, username, senha, nome, cpf, email, telefone, endereco);
    }

    constructor(username, senha, nome, cpf, email, telefone, endereco) {
        super(username, senha, nome, cpf, email, telefone, endereco);
    }
}