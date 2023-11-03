function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto;
        case 7:
            diaSemanaTexto = 'sabado'
            return diaSemanaTexto;
    };
}
function getMesTexto(mes) {
    let diaMesTexto;
    switch (mes) {
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 2:
            diaMesTexto = 'Fevereiro'
            return diaMesTexto;
        case 3:
            diaMesTexto = 'Março'
            return diaMesTexto;
        case 4:
            diaMesTexto = 'Abril'
            return diaMesTexto;
        case 5:
            diaMesTexto = 'Maio'
            return diaMesTexto;
        case 6:
            diaMesTexto = 'Junho'
            return diaMesTexto;
        case 7:
            diaMesTexto = 'Julho'
            return diaMesTexto;
        case 8:
            diaMesTexto = 'Agosto'
            return diaMesTexto;
        case 9:
            diaMesTexto = 'Setembro'
            return diaMesTexto;
        case 10:
            diaMesTexto = 'Outubro'
            return diaMesTexto;
        case 11:
            diaMesTexto = 'Novembro'
            return diaMesTexto;
        case 12:
            diaMesTexto = 'Dezembro'
            return diaMesTexto;
            
    };
}
function zeroAEsquerda(min) {
    return min >= 10 ? min : `0${min}`
}
function getAnoHoraMin (anoHoraMin) {
    const anoAtual = zeroAEsquerda(dataHj.getFullYear())
    const hora = zeroAEsquerda(dataHj.getHours())
    const min = zeroAEsquerda(dataHj.getMinutes())
    return `${anoAtual} ás ${hora}:${min}`
}

const dataHojeTexto = document.querySelector('.data-hoje')
const dataHj = new Date();

const diaSemana = dataHj.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

const diaMes = dataHj.getDate()

const mes = dataHj.getMonth() + 1 
const diaMesTexto = getMesTexto(mes)

const anoHoraMinTexto = getAnoHoraMin()

dataHojeTexto.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${diaMesTexto} em ${anoHoraMinTexto} `