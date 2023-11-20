function Produto(nome, venda, estoque) {
    this.nome = nome;
    this.venda = venda
    let
    Object.defineProperty(this, 'estoque', {
        value: estoque, 
        writable:true,
        enumerable:true,
        configurable:false,
        get: () =>{
            return estoque
        }
    })
}
const produto1 = new Produto('camiseta', 50, 8)
console.log(produto1)