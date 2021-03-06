console.log("Manipulando meus arrays");

const avengers = [
    {
        "nome": "Capitão America",
        "genero": "M",
        "idade": 84,
        "habilidades": ["honestidade", "escudo", "porrada"]
    },
    {
        "nome": "Homem de ferro",
        "genero": "M",
        "idade": 30,
        "habilidades": ["dinheiro", "inteligência", "porrada", "armadura"]
    },
    {
        "nome": "Capitã Marvel",
        "genero": "F",
        "idade": 45,
        "habilidades": ["porrada", "fogo", "super forte", "invencivel", "voar", "destreza"]
    },
    {
        "nome": "War machine",
        "genero": "M",
        "idade": 40,
        "habilidades": ["exercito", "armadura", "honestidade", "porrada"]
    },
    {
        "nome": "Gavião arqueiro",
        "genero": "M",
        "idade": 32,
        "habilidades": ["arco e flecha", "porrada"]
    }
];

/*
  Quero listar todos os heróis que são homens
*/

const masculino = avengers.filter(item => item.genero == "M")

/*
  Quero listar todos os nomes dos heróis
*/

// const nomes = avengers.map(item => item.nome)

/*
Retornar no array o nome & genero dos heróis

O que eu preciso retornar de fato?
*/

//solucao 1
// const nomes = avengers.map(item => [item.nome, item.genero])
// console.log(nomes)

//solucao 2
// const objetoDeHeroi = avengers.map(item => {
//     return {
//         nome: item.nome,
//         genero: item.genero
//     }
// });


/*
Preciso retornar o total de idade dos herois
*/

// const totalIdade = avengers.reduce((total, item) => {
//     return total + item.idade
// }, 0);
//
// console.log(totalIdade);

/*
  Eu quero listar um avenger que possua mais de 50 anos
*/

// const experiente = avengers.some((item) => item.idade > 50 && item.genero == "M");
// console.log(experiente);

/*
  Eu quero saber se todos os objetos do array possuem a habilidade porrada
*/

// const porrada = avengers.every(item => item.habilidades.includes("porrada"))
// console.log(porrada);

/*
 Buscar um avenger do genero = F
*/

// const buscaEspecifica = avengers.find(item => item.genero == "M");
//
// console.log(buscaEspecifica);