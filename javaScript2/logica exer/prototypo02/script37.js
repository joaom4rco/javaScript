function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.aumento = function(quantia) {
    this.valor += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.valor -= quantia;
}

function Camiseta(nome, valor, cor) {
    Produto.call(this, nome, valor);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(quantia) {
    this.valor = this.valor + (this.valor * (quantia /100))
}
Camiseta.prototype.desconto = function(quantia) {
    this.valor = this.valor - (this.valor * (quantia /100))
}

function Caneca (nome, valor, cor, estoque) {
    Produto.call(this, nome, valor)
    this.cor = cor

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
        get: () => {
            return estoque
        },
        set: valor => {
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Camiseta.prototype )
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('caneca', 40, 'preta',5)
caneca.desconto(50)
console.log(caneca)

const camisa = new Camiseta('blusa de frio', 100, 'preta');
camisa.aumento(50);
console.log(camisa);