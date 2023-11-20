function Produto(nome, venda, estoque) {
    this.nome = nome;
    this.venda = venda
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', { 
        enumerable:true,
        configurable:false,
        get: () =>{
            return estoquePrivado;
        },
        set: valor => {
            if(typeof valor !== 'number') {
                let error = 'o erro está no valor do estoque'
                throw new TypeError(error,' só aceitamos numeros inteiros'); 
            }

            estoquePrivado = valor
        }
    })
}
const produto1 = new Produto('camiseta', 50, 8)
produto1.estoque = 'fefefe'
console.log(produto1)