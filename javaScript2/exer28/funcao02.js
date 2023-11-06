// function funcao() {
//     console.log(arguments)
// }
// funcao('isdis', 5,5,56,56,41,4,84,84,)

function funcao2 (a,b,c) {
    let soma = 0
    for (let argumentos of arguments){
        soma += argumentos
    }
    console.log(soma)
}
funcao2(1,5,2,6,4,8,9,8)