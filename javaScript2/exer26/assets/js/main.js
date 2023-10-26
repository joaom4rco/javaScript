const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'UTC'
    })
}
let segundos = 10
fun
iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = ''
    relogio.style.color = 'black'
})
pausar.addEventListener('click', function(event) {
    relogio.style.color = 'red'
})
zerar.addEventListener('click',function(event) {
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
})

