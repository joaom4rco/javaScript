function CriarCalculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes()
    };
    this.displayClear = () => {
        this.display.value = ' '
    }
    this.displayDel = () => {
        this.display.value = this.display.value.slice(0, -1)
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
            if(!conta) {
                alert('conta invalida')
                return
            }
        }
    }
    this.cliqueBotoes = () => {
        const documento = document.addEventListener('click', e => {
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
        return documento
    };
    this.btnParaDisplay = (valor) => {
        this.display.value += valor
    }
}
const calculadora = new CriarCalculadora()
calculadora.inicia()
