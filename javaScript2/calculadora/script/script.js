function criarCalculadora() {
    return {
        display:document.querySelector('.display'),

        inicia() {
        this.cliqueBotoes()
        this.presioonarEnter()
        },

        DisplayClear() {
            this.display.value = ' '
        },

        DisplayDel() {
            this.display.value = this.display.value.slice(0, -1 )
        },
        
        displayIgual() {
            let conta = this.display.value
            try {
                conta = eval(conta)

                if(!conta) {
                    alert('conta invalida')
                    return
                }
                this.display.value = conta
            } catch (err) {
                if(!conta) {
                    alert('conta invalida')
                    return
                }
            }
        },
        presioonarEnter () {
            document.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.displayIgual()
                }
            })
        },
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.DisplayClear()
                }
                if (el.classList.contains('btn-del')) {
                    this.DisplayDel()
                }
                if (el.classList.contains('btn-eq')) {
                    this.displayIgual()
                }
            })
        },
        btnParaDisplay(valor) {
            this.display.value += valor
      }
    }
}
const calculadora = criarCalculadora()
calculadora.inicia()