const pessoa = {
    nome:'joao',
    idade:18,
    profissao:'professor',

    pessoa() {
        console.log(`meu nome é ${this.nome}, tenho ${this.idade} anos, e sou ${this.profissao}`)
    },

    incrementaIdade() {
        ++this.idade
        console.log(`minha idade atual é ${this.idade} anos`)
    }
};
pessoa.incrementaIdade()
pessoa.pessoa()