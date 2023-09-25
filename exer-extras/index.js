function saudacao(nome) {
    return (`${nome} é muito gostoso`)
}
const variavel = saudacao('joao')
console.log(variavel)

function conta(x = 1, y = 1, b = 1) {
    const resultado = x * y ** b 
    return resultado
}
const resultado = conta(5, 3, 2)
console.log(resultado) 

function criarPessoa(nome, sobrenome, idade, sexo) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade, 
        sexo: sexo
    }
    
}
const pessoa1 = criarPessoa('joao', 'santos', 18, 'masculino')
const pessoa2 = criarPessoa('marco', 'andrade', 20, 'masculino')
console.log(pessoa1.nome, pessoa2)


const pessoa = {
    nome : 'joao',
    sobrenome : 'santos',
    idade : 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi `)
    },
    incrementaIdade() {
        this.idade
        console.log(`a minha idade daqui a seis decadas será ${this.idade +60} anos`)
    } 
}
pessoa.fala()
pessoa.incrementaIdade()