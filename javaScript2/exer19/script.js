const verdade = true
let nome = 'joao'
var nom2 = 'maria'
console.log(nome, nom2)
if (verdade) {
    nome = 'maria'
    console.log(nome, nom2)
    if (verdade) {
        nome = 'otavio'
        console.log(nom2, nome)
    }
}
var sobrenome = 'miranda'
function varName() {
    var nome =  'joao'
    sobrenome =  sobrenome 
    console.log(nome, sobrenome)
}
varName()