function meuEscopo () {
    const form = document.querySelector('.form')
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('olá');
    //     console.log('vai se fuder');
    // };
    function recebeEventoFormulario (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobrenome');
        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');

        console.log(nome.value, sobreNome.value, altura.value, peso.value)
    }
    form.addEventListener('submit', recebeEventoFormulario)
}

meuEscopo()