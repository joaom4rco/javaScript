const primeiroColocado = document.querySelector('#primeiro-colocado')
const segundoColocado = document.querySelector('#segundo-colocado')
const pontos = document.querySelector('#pontos')
const partidas = document.querySelector('#partidas')
const vitorias = document.querySelector('#vitorias')
const vitorias2 = document.querySelector('#vitorias2')
const empates = document.querySelector('#empates')
const derrotas = document.querySelector('#derrotas')
const golsFeitos = document.querySelector('#gols-pro')
const saldoDeGols = document.querySelector('#saldo-de-gols')
const ultimasPartidas = document.querySelector('#ultimas-partidas')
const button = document.querySelector('#button')

let contagem = 0
let vitoria = 0
function brasileirao() {
    return {
        time1: document.querySelector('#itime'),
        time2: document.querySelector('#itime2'),
        botao: button,
        partidas() {
            this.botao.addEventListener('click', e => {
            contagem++
            partidas.innerHTML = contagem
            })
        },
        vitoria () {
            this.botao.addEventListener('click', e => {
                if(Number(this.time1.value) > Number(this.time2.value)) {
                    vitoria++
                    vitorias2.innerHTML = vitoria
                }else if (Number(this.time1.value) > Number(this.time2.value))
            })
        }
    }
}
const p = brasileirao()
p.partidas()
p.vitoria()