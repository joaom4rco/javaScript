function meuEscopo () {
    const form = document.querySelector('.form')
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('olá');
    //     console.log('vai se fuder');
    // };
    function recebeEventoFormulario (evento) {
        let nome = form.querySelector('.nome');
        let sobreNome = form.querySelector('.sobrenome');
        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');
    }
    form.addEventListener('submit', recebeEventoFormulario)
}

meuEscopo()