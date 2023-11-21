function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
}
Produto.prototype.promocao = function (percentual) {
    this.preco = Number(this.preco - (this.preco * (percentual / 100)).toFixed(2))
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 100, 80)
const p2 = new Produto('ps5', 3000, 100)

p2.aumento(67)
p2.promocao(40)
console.log(p2)