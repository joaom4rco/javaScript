const data = new Date('1980-01-05')
let diaSemana = data.getDay()
let diaSemanaTexto
switch (diaSemana) {
    case 0: 
    diaSemanaTexto = 'domingo'
    break
case 1 :
    diaSemanaTexto = 'segunda'
break;
case 2:
    diaSemanaTexto = 'terça'
break 

}
console.log(diaSemana, diaSemanaTexto)