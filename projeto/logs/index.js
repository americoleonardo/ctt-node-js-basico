const dotenv = require('dotenv');
dotenv.config();

const { SERVICO, PORTA } = process.env;
console.log(`[Carregando] serviço ${SERVICO}:${PORTA}`);

const express = require('express')
app = express();
app.use(express.json());


require("./rotas")

app.listen(PORTA, () => {
    console.log(`[Carregou] ${SERVICO}:${PORTA}`)
});