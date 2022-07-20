const path = require('path');
const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', require('./routes/usuario.routes'));

app.listen(8081, () => console.log(`SGC api iniciada!`));

