function estoqueMercado () {
    return {
        estoqueDoMercado() {
            this.comprarEstoque()
        },

        comprarEstoque() {
            
            const quantidadeAtual = this.quantidadeAtualEstoque();
            const quantidadeMinima = this.quantidadeMinEstoque();

            if(quantidadeAtual > quantidadeMinima) {
                console.log('não efetuar compra')
            }else if (quantidadeAtual < quantidadeMinima) {
                console.log('efetuar compra')
            }
        },

        quantidadeAtualEstoque() {
            const conta = Math.floor((this.quantidadeMaxEstoque() + this.quantidadeMinEstoque())/2)
            console.log('o seu estoque atual é de:' + ' ' + conta )
            return conta 
        },

        quantidadeMinEstoque() {

            const estoqueMin = 200
            return Math.floor(estoqueMin)
        },

        quantidadeMaxEstoque() {

            const estoqueMax = Math.random() * (500 - 0) +20
            return Math.floor(estoqueMax)  
        }
    }
}
const mercado = estoqueMercado()
mercado.estoqueDoMercado()