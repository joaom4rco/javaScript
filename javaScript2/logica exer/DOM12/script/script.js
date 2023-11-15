function inputNum() {
    return {
        fnum: document.querySelector('#fnum'),
        contar:document.querySelector('#fcontar'),
        resultado: document.querySelector('#resultado'),

        valor() {
            this.botao()
        },
        
        botao() {
            this.contar.addEventListener('click', e =>{
                this.forInput()
            })
        },

        forInput() {
            const valorInput = this.fnum.value
            for(let i = 0; i <= valorInput; i++ ) {
                this.resultado.innerHTML += i
            }
        }
    }
}
const input = inputNum()
input.valor()