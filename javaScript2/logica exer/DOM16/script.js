function data() {
    return {
        hora: document.querySelector('#hora-atual'),
        imagem: document.querySelector('#imagem-hora'),
        
        iniciar() {
            this.adicionaHora()
            this.adicionaImagem()
        },
        horaAtual() {
            let data = new Date()
            let hora = data.getHours()
            return hora 
        },
        adicionaHora() {
            this.hora.innerHTML = `agora são ${this.horaAtual()} horas`
        },
        adicionaImagem() {
            if ( this.horaAtual() >= 0 && this.horaAtual() < 12 ) {
               this.imagem.src = "thinkstockphotos-466262074.webp"
               document.body.style.background = '#e2cd9f'
            }else if (this.horaAtual() >= 12 && this.horaAtual() < 18) {
                this.imagem.src = "fim-de-tarde.jpg"
                document.body.style.background = '#b9846f'
            }else {
                this.imagem.src = "images.jfif"
               document.body.style.background = '#515154'
            }
        },
    }
}
const dataHora = data()
dataHora.iniciar()