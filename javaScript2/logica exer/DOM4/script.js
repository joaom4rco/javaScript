function anoMesDia() {
    const ano = Number(prompt('escreva quantos anos você tem'))
    const mes = Number(prompt('escreva quantos meses se passou do seu ultimo aniversario'))
    const dia = Number(prompt('escreva quantos dias se passou do dia do seu aniversario'))

    const calc = (ano * 365) + (mes * 30) + dia
    const diaNasc = Number(alert(`voce ja viveu ${calc} dias`))

}
anoMesDia()