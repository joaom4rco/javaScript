// function string(frase) {
//     const fra = frase
//     return fra.slice('').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ');
// }
// const frase = 'olá meu nome é joao'
// const resultado = string(frase)
// console.log(resultado)

function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("ello world"));h