const pessoa1 = {
    nome: 'joao',
    sobrenome: 'santos',
    idade: 18
};
console.log(pessoa1)
console.log(pessoa1.nome)

const pessoa2 = {
    nome: 'maria', 
    sobrenome: 'santana',
    idade: 20, 

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    fala2() {
        console.log(`${this.nome} tem ${this.idade} anos atualmente`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala2();
