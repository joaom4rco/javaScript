// function funcao(a, b = 2, c) {
//     console.log(a + b+c)
// }
// funcao(5, undefined, 20)

// function conta(operador, acumulador, ...numeros) {
//     for (let numero of numeros) {
//         if(operador === '+') acumulador += numero
//         if(operador === '-') acumulador -= numero
//         if(operador === '/') acumulador /= numero
//         if(operador === '*') acumulador *= numero
//     }
//     console.log(acumulador)
// }
// conta('*', 2, 10,50,20,80,10)

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
};
conta('*', 2, 10,50,20,80,10)