function horaAEsquerda (num) {
    return num
};
function relogio (data) {
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const hora = data.getHours()
    const min = data.getMinutes()
    const seg = data.getSeconds()
    const ms = data.getMilliseconds()

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date()
const dataBrasil = relogio(data)
console.log(dataBrasil)