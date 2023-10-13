function criarPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome: sobrenome,idade: idade };
};
const pessoa1 = criarPessoa('joao', 'santos', 18)
const pessoa2 = criarPessoa('maria', 'santana', 18)
const pessoa3 = criarPessoa('Junior', 'santana', 15)
const pessoa4 = criarPessoa('Ronaldo', 'miranda', 25)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)