const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
function criarHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000) 
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'UTC'
    })
}
segundos = 0
let timer;
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criarHoraDosSegundos(segundos)
    })
}