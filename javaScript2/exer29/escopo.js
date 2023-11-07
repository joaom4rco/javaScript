function retornaNome(nome) {
    return function() {
        return nome
    }
}
const funcao = retornaNome('joao')
console.dir(funcao)