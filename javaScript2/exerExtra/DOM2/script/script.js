const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('evento')

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    const calcImc = peso / (altura * altura)

    if(!peso) {
        mensagem('não é possivel fazer o calculo', false)
        return
    }
    if (!altura) {
        mensagem('nao consigo fazer a conta', false)
        return;
    }
    if (calcImc < 18,5) {
        mensagem(`o seu imc é de ${calcImc.toFixed(2)} e você está abaixo do peso, CUIDADO!`)
    }else if (calcImc >= 18,5 && calcImc <= 24,9) {
        mensagem(`o seu imc é de ${calcImc.toFixed(2)} você está no peso normal`)
    }
})
function criarP() {
    const p = document.createElement('p')
    return p;
}
function mensagem(msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criarP()
    p.innerHTML = msg
    resultado.appendChild(p)
}
