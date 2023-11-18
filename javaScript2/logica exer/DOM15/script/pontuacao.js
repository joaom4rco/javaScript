const primeiroColocado = document.querySelector('#primeiro-colocado')
const segundoColocado = document.querySelector('#segundo-colocado')
const pontos = document.querySelector('#pontos')
const pontos2 = document.querySelector('#pontos2')
const partidas = document.querySelector('#partidas')
const partidas2 = document.querySelector('#partidas2')
const vitorias = document.querySelector('#vitorias')
const vitorias2 = document.querySelector('#vitorias2')
const empates = document.querySelector('#empates')
const empates2 = document.querySelector('#empates2')
const derrotas = document.querySelector('#derrotas')
const derrotas2 = document.querySelector('#derrotas2')
const golsFeitos = document.querySelector('#gols-pro')
const saldoDeGols = document.querySelector('#saldo-de-gols')
const ultimasPartidas = document.querySelector('#ultimas-partidas')
const button = document.querySelector('#button')

function brasileirao() {
    let contagem = 0;
    let vitoria2 = 0;
    let vitoria = 0;
    let empatesJ = 0;
    let pontuacao = 0;
    let pontuacao2 = 0;
    let derrota = 0
    let derrota2 = 0

    function atualizarDOM() {
        partidas.innerHTML = contagem;
        partidas2.innerHTML = contagem;
        vitorias2.innerHTML = vitoria2;
        pontos2.innerHTML = pontuacao2;
        vitorias.innerHTML = vitoria;
        pontos.innerHTML = pontuacao;
        empates.innerHTML = empatesJ;
        empates2.innerHTML = empatesJ;
        derrotas.innerHTML = derrota
        derrotas2.innerHTML = derrota2
    }

    return {
        time1: document.querySelector('#itime'),
        time2: document.querySelector('#itime2'),
        botao: button,
        partidas() {
            contagem++;
        },
        vitoria() {
            if(Number(this.time1.value) > Number(this.time2.value)) {
                vitoria2++;
                pontuacao2 += 3;
            } else if (Number(this.time1.value) < Number(this.time2.value)) {
                pontuacao += 3;
                vitoria++;
            } else {
                empatesJ++;
                pontuacao++;
                pontuacao2++;
            }
        },
        derrota() {
            if(Number(this.time1.value) > Number(this.time2.value)) {
                ++derrota
            } else if (Number(this.time1.value) < Number(this.time2.value)) {
                ++derrota2
            }
        },
        iniciar() {
            this.botao.addEventListener('click', e => {
                this.partidas();
                this.vitoria();
                this.derrota()
                this.golsFeitos()
                atualizarDOM();
                
            });
        },
        golsFeitos() {
            const gols = []
            gols.push(this.time1.value) 
            const arrayGols = gols.reduce((c,v) => {
                 console.log(Number(c +v))
            })
            console.log(arrayGols)
        }
    }
}

const p = brasileirao();
p.iniciar();