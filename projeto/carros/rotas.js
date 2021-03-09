const moment = require('moment');
const { v4: uuidv4 } = require("uuid");
let carros = [];

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

app.delete('/v1/carros/:id', (req, res) => {
    const { id } = req.params;

    const total = carros.length;
    carros = carros.filter(item => id != item.id);

    if (carros.length < total) {
        return res.status(204).json({});
    } else {
        return res.status(404).json({mensagem: "Ops! não encontramos esse carro!"});
    }
})


app.put(`/v1/carros/:id`, (req, res) => {
    const { id } = req.params;;
    const atualizar = req.body;
    let atualizou = false;
    let objetoAtualizado = {};

    carros = carros.map(item => {
        if (id != item.id) {
            return item;
        }

        atualizou = true;

        objetoAtualizado = {
            id: id,
            ...atualizar,
            timestamp: moment().toISOString()
        };

        return objetoAtualizado;
    });

    if (atualizou) {
        return res.status(200).json(objetoAtualizado);
    } else {
        return res.status(404).json({mensagem: "Ops! não encontramos esse carro!"});
    }

    return res.status(201).json({})
});

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