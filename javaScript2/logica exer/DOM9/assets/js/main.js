const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString ('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML= criarHoraDosSegundos(segundos)
    }, 950)
}
iniciar.addEventListener('click', function(e){
    clearInterval(timer)
    iniciaRelogio()
    relogio.style.color = 'black'
})
pausar.addEventListener('click', function(e) {
    clearInterval(timer)
    relogio.style.color = 'red'
})
zerar.addEventListener('click', function() {
    clearInterval(timer)
    relogio.innerHTML ='00:00:00'
    segundos = 0
    relogio.style.color = 'black'
})