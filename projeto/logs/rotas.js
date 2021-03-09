const moment = require('moment');
const { v4: uuidv4 } = require("uuid");

const logs = [];

/*
app.<verbo>("<< endpoint >>", (request, response) => {})
*/

app.get('/v1/logs', function (req, res) {
    return res.status(200).json(logs);
})

app.post('/v1/logs', function (req, res) {
    const { servico, evento } = req.body;

    if (!servico.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou o nome do serviço!"
            }
        )
    }

    if (!evento.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou o evento do serviço!"
            }
        )
    }

    const event = {
        id: uuidv4(),
        ...req.body,
        timestamp: moment().toISOString()
    };

    logs.push(event);
    console.log("Executou o evento de registro.");
    return res.status(201).json(event);
})