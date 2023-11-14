// some todos os números de um array
//

const numeros = [1,2,3,4,5]
const total = numeros.reduce((acumulador, valor) =>{
    return acumulador + valor
})
console.log(total)