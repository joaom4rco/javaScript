// Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento

function produto(nome, valor) {
    return {
        get cartao() {
            const conta = valor + 20
            console.log('nomeDoProduto:' + nome + ' ' +  'o seu valor pelo cartão ficou de:' + conta + 'R$')
        },
        get pix() {
            let nomeDoProduto = nome
            const conta = valor -5
            console.log('nomeDoProduto:' + nomeDoProduto + ' ' +  'o seu valor pelo pix ficou de:' + conta + 'R$')
        }

    
    }

}
const pt1 = produto('camiseta', 40)
const pt2 = produto('short', 80)
const pt3 = produto('sapato', 120)
const pt4 = produto('Xbox one', 1600)

pt4.cartao
