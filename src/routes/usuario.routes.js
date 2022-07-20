const express = require('express');
const usuarioController = require('../controller/usuario.controller');
const router = express.Router();

router.get("/usuarios", async function(req, res){
    res.send(await usuarioController.listarUsuarios());
});

router.get("/usuario/:id", async function(req, res){
    res.send(await usuarioController.getUsuario(req.params.id));
});


router.delete("/usuario/:id", async function(req, res){
    res.send(await usuarioController.deleteUsuario(req.params.id));
});

router.post("/usuario", async function(req, res){
    res.send(await usuarioController.postUsuario(req.body));
});

module.exports = router;