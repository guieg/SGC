const express = require('express');
const automovelController = require('../controller/automovel.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');

router.get("/automoveis", async function(req, res){
    return res.send(await automovelController.listarAutomoveis());
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