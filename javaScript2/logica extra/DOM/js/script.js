function somar() {
    return {
        inputA: document.querySelector('#inputValorA'),
        inputB: document.querySelector('#inputValorB'),
        button: document.querySelector('.somar'),
        resultado: document.querySelector('.resulltado'),
        inicia() {
            this.resultadoValores()
        },
        resultadoValores() {
            this.button.addEventListener('click', e =>{
                const conta =  Number(this.inputA.value + this.inputB.value)
                console.log(conta)
            })
        }
    }
}
const somarInputs = somar()
somarInputs.inicia()