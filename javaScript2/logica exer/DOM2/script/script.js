const idade = Number(prompt('qual é a sua idade?'))
const resultado = document.querySelector('.resultado')
if (idade >= 18) {
    resultado.innerHTML = 'você é maior de idade'
}else if (idade >= 0 & idade < 18) {
    resultado.innerHTML = 'você é menor de idade'
}else {
    resultado.innerHTML = 'idade não reconhecida'

}