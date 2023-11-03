const dataHojeTexto = document.querySelector('.container h1');
function dia(diaSemana) {
    let diaSemanaTexto;
    switch ( diaSemana) {
        case 0:
            diaSemanaTexto.innerHTML = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto.innerHTML = 'segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto.innerHTML = 'terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto.innerHTML = 'quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto.innerHTML = 'Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto.innerHTML = 'Sexta-feira'
            return diaSemanaTexto;
        case 7:
            diaSemanaTexto.innerHTML = 'sabado'
            return diaSemanaTexto;
    }
}

const dataHj = new Date();

const diaSemana = data.getDay();
const diaSemanaTexto = dia(diaSemana);