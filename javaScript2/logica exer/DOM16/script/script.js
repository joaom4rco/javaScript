function data() {
    return {
        hora: document.querySelector('#hora-atual'),
        header: document.querySelector('#header'),
        
        iniciar() {
            this.adicionaImagem()
            this.adicionaHora()
            
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
            let imagem = document.createElement('img')
            if ( this.horaAtual()>= 18 && this.horaAtual() < 5 ) {
               imagem.src = "img/images.jfif"
            }else if (this.horaAtual() >= 5 && this.horaAtual() < 13) {
                imagem.src = "img/fim-de-tarde.jpg"
            }else if (this.horaAtual() >= 13 && this.horaAtual() < 18) {
               imagem.src = "img/thinkstockphotos-466262074.webp"
            }
            this.header.appendChild(imagem)
        },
    }
}
const dataHora = data()
dataHora.iniciar()