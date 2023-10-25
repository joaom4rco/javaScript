function mostraHora() {
    let data = new Date('')

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    })
}
const timer = setInterval(function(){
    console.log(mostraHora())
}, 2000)
setTimeout(function(){
    clearInterval(timer)
}, 5000)