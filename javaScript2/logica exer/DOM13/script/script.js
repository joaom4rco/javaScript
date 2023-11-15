function inputNum() {
    return {
        fnum: document.querySelector('#fnum'),
        contar:document.querySelector('#fcontar'),
        resultado: document.querySelector('#resultado p'),

        valor() {
            this.botao()
        },
        
        botao() {
            this.contar.addEventListener('click', e =>{
                this.forInput()
                this.fnum.value = ''
            })
        },

        forInput() {
            const valorInput = this.fnum.value
            for(let i = 0; i <= valorInput; i++ ) {
                this.resultado.innerHTML += ` ${i} &#x1F449`
            }
            this.resultado.innerHTML += '&#x1F3C1'
        },

        
    }
}
const input = inputNum()
input.valor()