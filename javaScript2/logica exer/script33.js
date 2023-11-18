function numeros(n,n2,n3,n4) {
    return {
        novosNumeros(){
            const num =  [n, n2,n3,n4]
            return num
        },

        numerosPrimos() {
            const primos = this.novosNumeros().filter(valor => {
                if (valor % 2 === 1) {
                    console.log(valor)
                }
            })
        }
    }
}
const num = numeros(4,5,62,7)
num.numerosPrimos()