// first-class objects 
const falaOi = function() {
    console.log('oi')
}
function executaFuncao(funcao) {
    funcao()
}
executaFuncao(falaOi)

// arrow function

const falaArrow = () => {
    console.log('sou um arrow')
}
falaArrow()

