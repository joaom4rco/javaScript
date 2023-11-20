function Produto(nome, venda, estoque) {
    this.nome = nome;
    this.venda = venda
    Object.defineProperty(this, 'estoque', {
        value: estoque, 
        writable:true,
        enumerable:true,
        configurable:false
    })
}
const produto1 = new Produto('camiseta', 50, 8)
produto1.estoque++
console.log(produto1)