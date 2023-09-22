function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa1 = criarPessoa('luiz','miranda', 35)
const pessoa2 = criarPessoa('neymar', 'junior', 30)
console.log(pessoa1.nome, pessoa2)