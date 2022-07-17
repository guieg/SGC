module.exports = class Vendas {
    constructor(atributes){
        this.c_id = atributes.c_id;
        this.v_id = atributes.v_id;
        this.num_nota_fiscal = atributes.num_nota_fiscal;
        this.data = atributes.data;
        this.forma_pagamento = atributes.forma_pagamento;
    }
}