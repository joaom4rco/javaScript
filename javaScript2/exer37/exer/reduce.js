// some todos os números de um array

// const numeros = [1,2,3,4,5]
// const total = numeros.reduce((acumulador, valor) =>{
//     return acumulador + valor
// })
// console.log(total)

// retorne um array com os pares

// const numeros = [1,2,3,4,5]
// const total = numeros.reduce((acumulador, valor) =>{
//     if (valor % 2 ===0) acumulador.push(valor)
//     return acumulador
// }, [])
// console.log(total)

//  retorne a pessoa mais velha

const pessoas = [
    { nome: 'Fernando', idade: 62 },
    { nome: 'Maria', idade: 63 },
    { nome: 'Eduarda', idade: 85 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 82 },
    { nome: 'Wallace', idade: 17 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(pessoaMaisVelha)