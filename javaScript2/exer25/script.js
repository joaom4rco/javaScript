function mostraHora() {
    let data = new Date()

    return data.toLocaleDateString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
    })
}
const timer = setInterval(function(){
    console.log(mostraHora())
}, 2000)
setTimeout(function(){
    clearInterval(timer)
}, 5000)