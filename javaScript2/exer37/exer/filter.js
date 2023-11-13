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

// const pessoas = [
//     {nome:'joao', idade:18},
//     {nome:'maria', idade:20},
//     {nome:'wallace', idade:50},
//     {nome:'dagoberto', idade:80},
//     {nome:'marcos', idade:48},
// ]
// const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50)
// console.log(pessoasMaisVelhas)

// retorne o nome de pessoas que termina com a 

// const pessoas = [
//     {nome:'joao', idade:18},
//     {nome:'maria', idade:20},
//     {nome:'wallace', idade:50},
//     {nome:'dagoberto', idade:80},
//     {nome:'marcos', idade:48},
// ]
// const nomeQTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
// console.log(nomeQTerminaComA)

const pessoas = [
    { nome: 'Fernando', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduarda', idade: 55 },
    { nome: 'Letícia', idade: 60 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
   
const pessoas2 = pessoas.filter(n => n.nome.length >= 5).filter(i => i.idade > 50).filter(l => l.nome.toLowerCase().endsWith('a'));
console.log(pessoas2);
   
