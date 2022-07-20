const express = require('express');
const vendedorController = require('../controller/vendedor.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/vendedores", async function(req, res){
    return res.send(await vendedorController.listarVendedores());
});

router.get("/vendedor/:id", async function(req, res){
    return res.send(await vendedorController.getVendedor(req.params.id));
});


router.delete("/vendedor/:id", async function(req, res){
    return res.send(await vendedorController.deleteVendedor(req.params.id));
});

router.post("/vendedor", async function(req, res){
    return res.send(await vendedorController.postVendedor(req.body));
});

module.exports = router;