function meuEscopo() {
    const form = document.querySelector('.form');

    function recebeEventoForm (evento) {
        evento.preventDefaut();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value, sobrenome.value, peso.value, altura.value)
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()