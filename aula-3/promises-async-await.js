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

// const main = async () => {
//     try {
//         const carro = await listarVeiculo();
//
//         const placa = await listarPlaca(carro.id);
//
//         console.log(carro);
//         console.log(placa);
//     } catch (erro) {
//         console.error("Erro de operação =>", erro);
//     }
// }
async function main() {
    try {
        const carro = await listarVeiculo();

        const placa = await listarPlaca(carro.id);

        console.log(carro);
        console.log(placa);
    } catch (erro) {
        console.error("Erro de operação =>", erro);
    }
}

main();

// listarVeiculo().then((carro) => {
//     return listarPlaca(carro.id).then((placa) => {
//         console.log(carro);
//         console.log(placa);
//     })
// }).catch((erro) => {
//     console.error("Erro de operação =>", erro);
// })