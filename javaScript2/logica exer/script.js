// const pessoa = {
//     nome: 'joao',
//     idade: 18
// }
// const {nome, idade} = pessoa
// const frase = `olá, meu nome é ${nome} e eu tenho ${idade} anos`
// console.log(frase)

function pessoa () {
    const pessoa = {
        nome: 'joao', 
        idade: 18
    }
    const {nome, idade} = pessoa
    return `olá, meu nome é ${nome} e eu tenho ${idade} anos`
}
const frase = pessoa()
console.log(frase)
