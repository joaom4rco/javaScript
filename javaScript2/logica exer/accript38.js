// Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento

function produto(nome, valor) {
    return {
        nome:nome,
        cartao() {
            console.log( valor + 30 )
        },
        pix() {
            console.log(valor - 5) 
        }
    }
}
const pt1 = produto('camiseta', 40)
pt1.cartao()
pt1.pix()
