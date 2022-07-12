const Usuario = require('./usuario.model')

module.exports = class Vendedor extends Usuario {
    //propriedades e funções da classe aqui
    constructor(id, username, senha, nome, cpf, email, telefone, endereco, isGerente) {
        super(id, username, senha, nome, cpf, email, telefone, endereco);
        this.isGerente = isGerente;
    }
}