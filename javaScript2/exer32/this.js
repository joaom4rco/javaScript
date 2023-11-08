function criarpessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
    
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },


    fala(assunto = 'esta falando oi') {
        return `${this.nome} ${assunto}`
    },

    altura,
    peso,

    get imc() {
        const contaImc = this.peso / (this.altura**this.altura)
        return contaImc.toFixed(2)
    }
    };
};
const p1 = criarpessoa('joao', 'marco', 1.80, 80)
console.log(p1.imc)