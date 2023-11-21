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
const camisa = new Camiseta('camiseta', 50, 'vermelho');
camisa.aumento(50);
console.log(camisa);