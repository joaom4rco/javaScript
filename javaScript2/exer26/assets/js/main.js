const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let tempo = 0
let tempoCronometro 
function cronometro() {
    tempoCronometro = setInterval(function(){
        tempo++
        let segundos = (0 + (tempo % 60)).slice(-2);
        let minutos = (0 + Math.floor((tempo / 60) % 60)).slice(-2);
        let horas = (0 + Math.floor(tempo / 3600)).slice(-2);
    })
    return `${horas}:${minutos}:${segundos}`
}
iniciar.addEventListener('click', function(event) {
    
    relogio.innerHTML = cronometro()
    relogio.style.color = 'black'
})
pausar.addEventListener('click', function(event) {
    relogio.style.color = 'red'
})
zerar.addEventListener('click',function(event) {
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
})

