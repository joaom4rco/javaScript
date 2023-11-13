// retorne pessoas cujo nome seja maior que 5 letras

// const pessoas = [
//     {nome:'joao', idade:18},
//     {nome:'maria', idade:20},
//     {nome:'wallace', idade:50},
//     {nome:'dagoberto', idade:80},
//     {nome:'marcos', idade:48},
// ]
// const pessoaComNomeGrande = pessoas.filter(obj=> obj.nome.length = 5)
// console.log(pessoaComNomeGrande)

//retorne as pessoas com mais de 50 anos

const pessoas = [
    {nome:'joao', idade:18},
    {nome:'maria', idade:20},
    {nome:'wallace', idade:50},
    {nome:'dagoberto', idade:80},
    {nome:'marcos', idade:48},
]
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasMaisVelhas)