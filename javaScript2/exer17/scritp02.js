function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}` 
};
function relogio (data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    const ms = zeroAEsquerda(data.getMilliseconds())

    return `${dia}`
}
const data = new Date()
const dataBrasil = relogio(data)
console.log(dataBrasil)