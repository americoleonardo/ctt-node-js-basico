const moment = require('moment');
const { v4: uuidv4 } = require("uuid");
const carros = [];

/*
app.<verbo>("<< endpoint >>", (request, response) => {})
*/

/*
1) Quando eu quiser buscar um valor por URL, preciso referenciar :nome_do_parametro
2) Quando eu quiser buscar pela url, eu preciso filtrar por req.params.
3) Se quiser buscar pelo corpo "body", filtrar os dados da requisição por req.body.
*/
app.get('/v1/carros/:id', (req, res) => {
  const { id } = req.params;

  const carro = carros.filter(item => item.id == id);

  return res.status(200).json(...carro);
})

app.get('/v1/carros', (req, res) => {
    return res.status(200).json(carros);
})


app.post('/v1/carros', function (req, res) {
    const { nome, marca, tipo, placa, cor } = req.body;

    if (!nome.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou o nome do carro!"
            }
        )
    } else if (!marca.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou a marca do carro!"
            }
        )
    } else if (!tipo.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou o tipo do carro!"
            }
        )
    } else if (!placa.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou a placa do carro!"
            }
        )
    } else if (!cor.length) {
        res.status(422).json(
            {
                mensagem: "Opa, faltou a cor do carro!"
            }
        )
    }


    const carro = {
        id: uuidv4(),
        ...req.body,
        timestamp: moment().toISOString()
    };

    carros.push(carro);

    return res.status(201).json(carro);
})