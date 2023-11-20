function Pessoa(nome, sobrenome, idade) {
    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable:true,
            enumerable: true,
            configurable:true
        },
        sobrenome: {
            value: sobrenome,
            writable:true,
            enumerable: true,
            configurable:true
        }
    })
    this.idade = idade
}
const pessoa1 = new Pessoa('joao', 'marco', 18) 
console.log(pessoa1)