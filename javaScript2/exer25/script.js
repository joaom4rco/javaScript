function mostraHora() {
    let data = new Date()
    return data.toLocaleDateString('pt-BR', {
        hour12: false
    })
}
function funcaoDoInterval() {
    console.log(mostraHora())
}
setInterval(funcaoDoInterval, 2000)