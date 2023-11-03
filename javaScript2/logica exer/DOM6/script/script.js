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
    }
}
function getMesTexto(mes) {
    let diaMesTexto;
    switch (mes) {
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 2:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 2:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Janeiro'
            return diaMesTexto;
            
    }
}
const dataHojeTexto = document.querySelector('.data-hoje')
const dataHj = new Date();

const diaSemana = dataHj.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

const diaMes = dataHj.getDate()

const Mes = dataHj.getMonth() + 1 
const diaMesTexto = getMesTexto(mes)


dataHojeTexto.innerHTML = `${diaSemanaTexto}, ${diaMes}`