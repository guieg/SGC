const Usuario = require('./usuario.model')

module.exports = class Cliente extends Usuario {
    //propriedades e funções da classe aqui
    constructor(atributes) {
        super(atributes);
    }

}