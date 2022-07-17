const usuarioController = require('./controller/usuario.controller');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/usuarios", async function(req, res){
    res.send(await usuarioController.listarUsuarios());
});

app.get("/usuario/:id", async function(req, res){
    res.send(await usuarioController.getUsuario(req.params.id));
});


app.delete("/usuario/:id", async function(req, res){
    res.send(await usuarioController.deleteUsuario(req.params.id));
});

app.post("/usuario", async function(req, res){
    res.send(await usuarioController.postUsuario(req.body));
});

app.listen(8081, () => console.log(`SGC api iniciada!`));


