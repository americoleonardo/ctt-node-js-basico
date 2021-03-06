console.log("Exercício de Promises");

/*
* 1) Criar uma função que permita listar um veículo qualquer
* 2) Criar uma função que permita listar a placa de um veículo passando um ID
*/
const listarVeiculo = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Chamando a função listarVeiculo");
            setTimeout(() => {
                return resolve({
                    id: 1,
                    nome: "Gol"
                });
            }, 3000)
        } catch (erro) {
            return reject(new Error(erro));
        }
    })
}
const listarPlaca = (id) => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Chamando a função listarPlaca");
            let tempo = 4000;
            setTimeout(() => {
                return resolve({
                    id: id,
                    nome: `Gol - placa do carro`,
                    placa: "XXX-YYYY"
                })
            }, tempo);
        } catch (erro) {
            return reject(new Error(erro));
        }
    })
}

listarVeiculo().then((carro) => {
    return listarPlaca(carro.id).then((placa) => {
        console.log(carro);
        console.log(placa);
    })
}).catch((erro) => {
    console.error("Erro de operação =>", erro);
})








// const listarVeiculo = (callback) => {
//     console.log("Chamando a função listarVeiculo");
//     setTimeout(() => {
//         return callback(null, {
//             id: 1,
//             nome: "Gol"
//         });
//     }, 3000)
// };
/*const listarPlaca = (id, callback) => {
    console.log("Chamando a função listarPlaca");
    let tempo = 4000;
    setTimeout(() => {
        return callback(null, {
            id: id,
            nome: `Gol - placa do carro`,
            placa: "XXX-YYYY"
        })
    }, tempo);
}*/

// listarVeiculo(function resolverVeiculo(erro, veiculo) {
//     listarPlaca(veiculo.id, function resolverPlaca(erroPlaca, placa) {
//         console.log(veiculo);
//         console.log(placa);
//     })
// })