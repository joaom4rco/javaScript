function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes()
            this.cliqueBotoesEnter()
        },
        clear() {
            this.display.value = '';
        },
        displayDel() {
            this.display.value = this.display.value.slice(0, -1)
        },
        
        displayIgual() {
            let conta = this.display.value
            
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('conta invalida')
                    return;
                }
                this.display.value = conta
            } catch (err) {
                alert('conta invalida')
                return
            }
        },
        
        cliqueBotoesEnter() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.displayIgual()
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.botaoItemDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')) {
                    this.clear()
                }
                if(el.classList.contains('btn-del')){
                    this.displayDel()
                }
                if (el.classList.contains('btn-eq')) {
                    this.displayIgual()
                }
            })
        },

            botaoItemDisplay(valor) {
                this.display.value += valor
            }
        
    }
}
const calculadora = criaCalculadora()
calculadora.inicia()

