const express = require('express');
const vendaController = require('../controller/vendas.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/vendas", async function(req, res){
    return res.send(await vendaController.listarVendas());
});

router.get("/venda/:num_nota_fiscal", async function(req, res){
    return res.send(await vendaController.getVenda(req.params.num_nota_fiscal));
});


router.delete("/venda/:num_nota_fiscal", async function(req, res){
    return res.send(await vendaController.deleteVenda(req.params.id));
});

router.post("/venda", async function(req, res){
    return res.send(await vendaController.postVenda(req.body));
});

module.exports = router;