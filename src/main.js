const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
//require('dotenv/config');
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

app.listen(process.env.SGC_API_PORT, () => console.log(`sgc-api iniciada! escutando porta: ${process.env.SGC_API_PORT}`));

