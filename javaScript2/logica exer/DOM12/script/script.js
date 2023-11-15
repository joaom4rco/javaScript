function inputNum() {
    return {
        fnum: document.querySelector('#fnum'),
        contar:document.querySelector('#fcontar'),

        valor() {
            this.botao()
        },
        
        botao() {
            this.contar.addEventListener('click', e =>{
                const valorInput = this.fnum.value
                console.log(valorInput)
            })
        }
    }
}
const input = inputNum()
input.valor()