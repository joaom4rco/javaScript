function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
}
Produto.prototype.promocao = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
const p1 = new Produto('camiseta', 1000, 80)
p1.promocao(80)
console.log(p1)