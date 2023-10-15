const form = document.querySelector('#form')

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('evento')  
    
    let peso = form.querySelector('#peso')
    let altura = form.querySelector('#altura')

    let num1 = Number(peso)
    let num2 = Number(altura)
    const calcImc = num1 / (num2 * num2)

    console.log(typeof(num1))

    mensagem(calcImc)
})


function mensagem (msg) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = msg
}