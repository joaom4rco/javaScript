function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'segunda-feira'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'terça-feira'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'quarta-feira'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'quinta-feira'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'sexta-feira'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'sabado'
            return diaSemanaTexto
    }
};
function getMesTexto(mes) {
    let mesTexto;

    switch (mes) {
        case 1:
            mesTexto = 'janeiro'
            return mesTexto
        case 2:
            mesTexto = 'fevereiro'
            return mesTexto
        case 3:
            mesTexto = 'março'
            return mesTexto
        case 4:
            mesTexto = 'abril'
            return mesTexto
        case 5:
            mesTexto = 'maio'
            return mesTexto
        case 6:
            mesTexto = 'junho'
            return mesTexto
        case 7 :
            mesTexto= 'julho'
            return mesTexto
        case 8 :
            mesTexto= 'agosto'
        return mesTexto    
        case 9 :
            mesTexto= 'setembro'
        return mesTexto    
        case 10 :
            mesTexto= 'outubro'
        return mesTexto    
        case 11 :
            mesTexto= 'novembro'
        return mesTexto    
        case 12 :
            mesTexto= 'dezembro'
        return mesTexto    
    }
};
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}` 
};
function anoHoraMinutos (anoHoraMin) {
    let anoAtual = zeroAEsquerda(dataHoje.getFullYear())
    let hora = zeroAEsquerda(dataHoje.getHours())
    let min = zeroAEsquerda(dataHoje.getMinutes())
    return `${anoAtual} as ${hora}:${min}`

};
const dataHojeTexto = document.querySelector('.container h1');
const dataHoje = new Date();

const diaSemana = dataHoje.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

const diaMes = dataHoje.getDate()
const mes = dataHoje.getMonth() + 1;
const mesTexto = getMesTexto(mes);

const anoHoraMin = anoHoraMinutos(dataHoje);
dataHojeTexto.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${anoHoraMin}`;