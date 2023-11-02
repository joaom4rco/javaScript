function nota(){
    var nota = Number(prompt('digite um numero entre 1 e 10'))
    if (nota <= 10 && nota >= 0) {
        alert('sua nota foi validada')
    }else {
        while(nota >= 10 || nota <=0) {
            var nota = Number(prompt('digite o numero certo palhaço, de 0 a 10'))
        }
        alert('foi validado, finalmente')
    }
}
nota()