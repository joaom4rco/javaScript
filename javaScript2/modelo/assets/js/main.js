const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('evento')  ;
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const calcImc = peso / (altura * altura);

    if (calcImc < 18.5) {
        console.log(`o seu imc é de ${calcImc.toFixed(1)} voce está abaixo do peso`)
    }else if (calcImc >= 18.5 && calcImc <= 24.9 ) {
        console.log(`o seu imc é de ${calcImc.toFixed(1)} voce está no peso normal`)
    }
});
function 
function criaP () {
    const p = document.createElement(p);
    return p ;
};

function mensagem (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    resultado.appendChild(p);
};