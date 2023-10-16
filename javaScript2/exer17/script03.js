const data = new Date('2030-02-05')
const diaSemana = data.getDay()
let diaSemanaTexto
if (diaSemana ===0) {
    diaSemanaTexto = 'Domingo'
} else if (diaSemana ===1) {
    diaSemanaTexto = 'Segunda'
}else if(diaSemana  ===2) {
    diaSemanaTexto = 'Terça-feira'
}else if (diaSemana  ===3) {
    diaSemanaTexto = 'quarta-feira'
} else if (diaSemana ===4) {
    diaSemanaTexto = 'quinta-feira'
} else if (diaSemana  ===5 ) {
    diaSemanaTexto = 'sexta-feira'
} else if(diaSemana  === 6) {
    diaSemanaTexto = 'Sabado'
}
const dataSemana = data.getDay()
console.log(dataSemana, diaSemanaTexto)