const dataHojeTexto = document.querySelector('.container h1')
function dia(diaSemana) {
    let diaSemanaTexto
    switch ( diaSemana) {
        case 0:
            diaSemanaTexto.innerHTML = 'segunda-feira'
            return diaSemanaTexto
        case 0:
            diaSemanaTexto.innerHTML = 'terça-feira'
            return diaSemanaTexto
            case 0:
                diaSemanaTexto.innerHTML = 'terça-feira'
                return diaSemanaTexto
    }
}

const dataHj = new Date()

const diaSemana = data.getDay()
const diaSemanaTexto = dia(diaSemana)