function Pessoa(nome, sobrenome, idade, peso, altura, imc) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.imc = Number((peso / (altura * altura)).toFixed(2))
}
const p1 = new Pessoa('joao', 'marco', 18, 80, 1.80)
console.log(p1)