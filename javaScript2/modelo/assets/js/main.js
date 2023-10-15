const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('evento')  ;
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const calcImc = peso / (altura * altura);

    if (Number.isNaN(calcImc)) {
        mensagem('nao consigo fazer a conta', false)
    }
    if (calcImc < 18.5) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} voce está abaixo do peso`)
    }else if (calcImc >= 18.5 && calcImc <= 24.9 ) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} voce está no peso normal`)
    }else if (calcImc >= 25 && calcImc <= 29.9) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} voce está com Sobrepeso`)
    }else if (calcImc >= 30 && calcImc <=34.9) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} voce está com Obesidade grau 1`)
    }else if (calcImc >= 35 && calcImc <= 39.9) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} voce está com Obesidade grau 2`)
    }else if (calcImc >= 40 && calcImc <= 59.9) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} voce está com Obesidade grau 3`)
    }else if (calcImc >= 60) {
        mensagem(`o seu imc é de ${calcImc.toFixed(1)} como voce está vivo??`)
    }
});

function criaP () {
    const p = document.createElement('p');
    return p ;
};

function mensagem (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p);
};