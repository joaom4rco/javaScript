// retorne a soma do dobro de todos os pares
// => filtrar pares
// =>dobrar os valores
// => reduzir(somar tudo)

const numeros = [4,5,68,55,22,3];

const resultado = numeros
    .filter(valor => valor % 2 ===0)
    .map(valor => valor * 2 )
    .reduce((ac, valor) =>  ac + valor);

console.log(resultado);