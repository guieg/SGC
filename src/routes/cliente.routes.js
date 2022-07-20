const express = require('express');
const clienteController = require('../controller/cliente.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/cliente", async function(req, res){
    return res.send(await clienteController.listarClientes());
});

router.get("/cliente/:id", async function(req, res){
    return res.send(await clienteController.getCliente(req.params.id));
});


router.delete("/cliente/:id", async function(req, res){
    return res.send(await clienteController.deleteCliente(req.params.id));
});

router.post("/cliente", async function(req, res){
    return res.send(await clienteController.postCliente(req.body));
});

module.exports = router;