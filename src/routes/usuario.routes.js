const express = require('express');
const usuarioController = require('../controller/usuario.controller');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { signupValidation, loginValidation } = require('../utils/validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

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

router.post("/cadastro", signupValidation, async function(req, res){
    res.status(await usuarioController.cadastroUsuario(req.body)).send();
});

router.post("/login", loginValidation, async function(req, res){
    res.status(await usuarioController.postUsuario(req.body)).send();
});

module.exports = router;