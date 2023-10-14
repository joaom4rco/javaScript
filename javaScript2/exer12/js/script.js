function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []
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

        pessoas.push({
            nome: nome.value,
            sobreNome: sobreNome.value,
            altura: altura.value,
            peso: peso.value
        });
    
     
        console.log(pessoas)

        resultado.innerHTML = `<p>${nome.value} ${sobreNome.value} ${altura.value} ${peso.value}  </p>`
    }
    form.addEventListener('submit', recebeEventoFormulario)
}
meuEscopo();
