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
const camisa = new Camiseta('camiseta', 50, 'vermelho');
camisa.aumento(50);
console.log(camisa);