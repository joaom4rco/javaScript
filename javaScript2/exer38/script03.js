function Produto(nome, venda, estoque) {
    this.nome = nome;
    this.venda = venda
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        value: estoque, 
        writable:true,
        enumerable:true,
        configurable:false,
        get: () =>{
            return estoquePrivado;
        },
        set: valor => {
            if(typeof valor !== 'number') {
                throw new console.error('error, só aceitamos numeros inteiros'); 
            }

            estoquePrivado = valor
        }
    })
}
const produto1 = new Produto('camiseta', 50, 8)
console.log(produto1)