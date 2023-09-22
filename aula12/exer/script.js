function saudacao(nome) {
    return `bom dia ${nome}`
}
const variavel = saudacao('joao')
console.log(variavel)

function saudacao2(nome) {
    return `Bom dia ${nome}`
}
const nome2 = saudacao('maria')
console.log(nome2)



const conta2 = n  => n / 8
console.log(conta2(18))

function soma(x = 1, y = 1) {
    const resultado = x + y 
    return resultado
}
const conta = soma(5, 8)
console.log(conta)