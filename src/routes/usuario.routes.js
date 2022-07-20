const express = require('express');
const usuarioController = require('../controller/usuario.controller');
const vendedorController = require('../controller/vendedor.controller');
const router = express.Router();
const { signupValidation, loginValidation } = require('../utils/validation');


router.post("/usuario/vendedor", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    let novoid = await usuarioController.cadastroUsuario(req.body, res);
    console.log(novoid);
    return res.send(await vendedorController.postVendedor({id: novoid, gerente: req.body.gerente}));
});

router.put("/usuario/:id/set-gerente", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    return res.send(await vendedorController.promoverVendedor(req.params.id));
});

router.put("/usuario/:id/unset-gerente", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    return res.send(await vendedorController.rebaixarVendedor(req.params.id));
});

router.get("/usuarios", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    return res.send(await usuarioController.listarUsuarios());
});

router.get("/usuario/:id", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    return res.send(await usuarioController.getUsuario(req.params.id));
});


router.delete("/usuario/:id", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id ) return res.status(403).send("Acesso negado");
    return res.send(await usuarioController.deleteUsuario(req.params.id));
});

router.post("/usuario", async function(req, res){
    let id = await usuarioController.authToken(req);
    if (!id) return res.status(403).send("Acesso negado");
    return res.send(await usuarioController.postUsuario(req.body));
});

router.post("/cadastro", signupValidation, async function(req, res){
    return usuarioController.cadastroUsuario(req.body, res);
});

router.post("/login", loginValidation, async function(req, res){
    return await usuarioController.loginUsuario(req.body, res);
});

module.exports = router;