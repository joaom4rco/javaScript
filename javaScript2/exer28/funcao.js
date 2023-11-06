// function hoisting
falaoi() 
function falaoi() {
    console.log('oii')
}

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

// funcao em objetos

const obj = {
    fala() {
        console.log('sou uma funcao em um objeto')
    }
}
obj.fala()