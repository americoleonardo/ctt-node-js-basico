console.log("Exercício de arrow functions");

/*
* 1) Criar uma função que permita listar um veículo qualquer
* 2) Criar uma função que permita listar a placa de um veículo passando um ID
*/
const listarVeiculo = (callback) => {
    console.log("Chamando a função listarVeiculo");
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: "Gol"
        });
    }, 3000)
};

const listarPlaca = (id, callback) => {
    console.log("Chamando a função listarPlaca");
    let tempo = 4000;
    setTimeout(() => {
        return callback(null, {
            id: id,
            nome: `Gol - placa do carro`,
            placa: "XXX-YYYY"
        })
    }, tempo);
}

listarVeiculo((erro, veiculo) => {
    listarPlaca(veiculo.id, (erroPlaca, placa) => {
        console.log(veiculo);
        console.log(placa);
    })
})