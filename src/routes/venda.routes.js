const express = require('express');
const usuarioController = require('../controller/usuario.controllerr');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/vendas", async function(req, res){
    return res.send(await usuarioController.listarUsuarios());
});

router.get("/venda/:num_nota_fiscal", async function(req, res){
    return res.send(await usuarioController.getUsuario(req.params.id));
});


router.delete("/venda/:num_nota_fiscal", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    return res.send(await usuarioController.deleteUsuario(req.params.id));
});

router.post("/venda", async function(req, res){
    return res.send(await usuarioController.postUsuario(req.body));
});

module.exports = router;