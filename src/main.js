const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', require('./routes/usuario.routes'));
app.use('/api', require('./routes/automovel.routes'));
app.use('/api', require('./routes/venda.routes'));
app.use('/api', require('./routes/modelo.routes'));
app.use('/api', require('./routes/cliente.routes'));
app.use('/api', require('./routes/vendedor.routes'));

app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Erro interno";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(8081, () => console.log(`SGC api iniciada!`));

