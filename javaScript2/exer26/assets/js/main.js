const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = dataHora()
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

    return data.toLocaleDateString('pt-BR')
}
