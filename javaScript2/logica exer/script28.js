function num (n) {
    return {
        
        conta() {
            let numero = 1
            while (numero <= n) {
                console.log(numero)
                numero++

            }
        }
    }
}
const n = 10
const funcao = num(n)
funcao.conta()