const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = dataHora()
    relogio.style.color = 'black'
})
pausar.addEventListener('click', function(event) {
    relogio.style.color = 'red'
})
zerar.addEventListener('click',function(event) {
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
})
function dataHora() {
    let data = new Date()
    let hora = data.getHours()
    let minutes = data.getMinutes()
    let second = data.getSeconds()
    if (hora < 10) {
        return `0${hora}:${minutes}:${second}`
    }else if (minutes < 10) {
        return `${hora}:0${minutes}:${second}`
    } else if (second < 10) {
        return `${hora}:${minutes}:0${second}`
    }else if (hora < 10 && minutes < 10 && second < 10) {
        return `0${hora}:0${minutes}:0${second}`
    }else {
        return `${hora}:${minutes}:${second}`
    }

}
