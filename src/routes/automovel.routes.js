const express = require('express');
const automovelController = require('../controller/automovel.controller');
const usuarioController = require('../controller/usuario.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/automoveis", async function(req, res){
    let auth = await usuarioController.authToken(req);
    if (!auth && !(await usuarioController.checaVendedor(auth.id))) return res.status(403).send("Acesso negado");
    return res.send(await automovelController.listarAutomoveis());
});

router.get("/automoveis/a-venda", async function(req, res){
    return res.send(await automovelController.listarAutomoveisAVenda());
});

router.get("/automoveis/vendidos", async function(req, res){
    let auth = await usuarioController.authToken(req);
    if (!auth && !(await usuarioController.checaVendedor(auth.id))) return res.status(403).send("Acesso negado");
    return res.send(await automovelController.listarAutomoveisVendidos());
});

router.get("/automovel/:chassi", async function(req, res){
    return res.send(await automovelController.getAutomovel(req.params.chassi));
});


router.delete("/automovel/:chassi", async function(req, res){
    return res.send(await automovelController.deleteAutomovel(req.params.chassi));
});

router.post("/automovel", async function(req, res){
    return res.send(await automovelController.postAutomovel(req.body));
});

module.exports = router;