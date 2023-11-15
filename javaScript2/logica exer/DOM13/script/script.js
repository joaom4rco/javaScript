function inputNum() {
    return {
        fnumMin: document.querySelector('#fnumMin'),
        fnumMax: document.querySelector('#fnumMax'),
        contar:document.querySelector('#fcontar'),
        resultado: document.querySelector('#resultado p'),

        valor() {
            this.botao()
        },
        
        botao() {
            this.contar.addEventListener('click', e =>{
                this.forInput()
                this.fnumMin.value = ''
                this.fnumMax.value = ''
            })
        },

        forInput() {
            const valorInputMax = this.fnumMax.value
            const valorInputMin = this.fnumMin.value
            saida = this.resultado
            if (valorInputMin<valorInputMax) {
                cont = valorInputMin
                n2 = valorInputMax
                while (cont <= n2) {
                    saida.innerHTML += ` ${cont} &#x1F449;`
                    cont ++
                }
            } else  if (n2<n1) {
                cont = n1
                while (cont >= n2) {
                    saida.innerHTML += ` ${cont} &#x1F449;`
                    cont --
                }
            this.resultado.innerHTML += '&#x1F3C1'
        }},

        
    }
}
const input = inputNum()
input.valor()