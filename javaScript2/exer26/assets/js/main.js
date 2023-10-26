const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
function data() {
    let dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    let min = dataAtual.getHours()
    let hora = dataAtual.getMinutes()
    let seg = dataAtual.getSeconds()
    if (hora <10) {
        return `0${hora}:${min}:${seg}`
    }else if(min < 10) {
        return `${hora}:0${min}:${seg}`
    }else if (seg < 10) {
        return `${hora}:${min}:0${seg}`
    }else if (hora < 10 && min < 10 && seg < 10) {
        return `0${hora}:0${min}:0${seg}`
    }else {
        return
    }
}
iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = 
    relogio.style.color = 'black'
})
pausar.addEventListener('click', function(event) {
    relogio.style.color = 'red'
})
zerar.addEventListener('click',function(event) {
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
})

