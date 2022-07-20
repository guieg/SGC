const express = require('express');
const modeloController = require('../controller/modelo_fabricante.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/modelos", async function(req, res){
    return res.send(await modeloController.listarModeloFabricante());
});

router.get("/modelo/:modelo", async function(req, res){
    return res.send(await modeloController.postModeloFabricante(req.params.modelo));
});


router.delete("/modelo/:modelo", async function(req, res){
    return res.send(await modeloController.deleteModeloFabricante(req.params.modelo));
});

router.post("/modelo", async function(req, res){
    return res.send(await modeloController.postModeloFabricante(req.body));
});

module.exports = router;