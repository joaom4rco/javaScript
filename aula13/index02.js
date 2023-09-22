const pessoa1 = {
    nome : 'joao',
    sobrenome: 'santos',
    idade: 18,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`)
    },
    incrementaIdade() {
        this.idade
        console.log(`a minha idade atual é ${this.idade}`)
    }
}
pessoa1.fala()
pessoa1.incrementaIdade()