function somar() {
    return {
        inputA: document.querySelector('#inputValorA'),
        inputB: document.querySelector('#inputValorB'),
        button: document.querySelector('.somar'),
        resultado: document.querySelector('.resultado'),
        inicia() {
            this.resultadoValores()
        },
        resultadoValores() {
            this.button.addEventListener('click', e =>{
                const conta =  Number(this.inputA.value)+ Number(this.inputB.value)
                alert('o resultado da sua conta foi:' + ' ' + `${conta}`)
            })
        }
    }
}
const somarInputs = somar()
somarInputs.inicia()