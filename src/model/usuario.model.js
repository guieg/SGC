module.exports = class Usuario {
    //propriedades e funções da classe aqui
    constructor(id, username, senha, nome, cpf, email, telefone, endereco) {
        this.id = id;
        this.username = username;
        this.senha = senha;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    constructor(username, senha, nome, cpf, email, telefone, endereco) {
        this.id = null;
        this.username = username;
        this.senha = senha;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}