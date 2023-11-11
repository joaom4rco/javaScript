function CriarCalculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes()
        this.pressEnter()
    };
    this.displayClear = () => {
        this.display.value = ' '
    }
    this.displayDel = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.pressEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13 ) {
                this.displayResultado()
            }
        })
    }
    this.displayResultado = () => {
        let conta = this.display.value
        try {
            conta = eval(conta) 

            if(!conta) {
                alert('conta invalida')
                return
            }

            this.display.value = conta
        } catch (error) {
            alert('conta invalida')
            return
            
        }
    }
    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
            };
            if (el.classList.contains('btn-clear')) {
                this.displayClear()
            };
            if (el.classList.contains('btn-del')) {
                this.displayDel()
            }
            if (el.classList.contains('btn-eq')) {
                this.displayResultado()
            }
        })
    };
    this.btnParaDisplay = (valor) => {
        this.display.value += valor
        this.display.focus()
    }
}
const calculadora = new CriarCalculadora()
calculadora.inicia()
