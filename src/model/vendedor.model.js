const Usuario = require('./usuario.model')

module.exports = class Vendedor extends Usuario {
    //propriedades e funções da classe aqui
    constructor(atributes) {
        super(atributes);
        this.gerente = atributes.gerente|| false;
    }
}