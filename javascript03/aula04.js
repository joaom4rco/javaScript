const jogador1 = {nome:'joao', vida:800, magia:300}
const jogador2 = {nome:'davi', vida:800, forca:300}
const jogador3 = {...jogador1, ...jogador2}
console.log(jogador3)


let soma = (v1,v2,v3,v4) => {
    return (v1+v2+v3) / v4
}
let valores = [5,3,8,2]
console.log(soma(...valores))