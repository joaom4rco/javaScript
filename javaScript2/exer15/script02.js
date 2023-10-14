const hora = 100

if (hora >= 0 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora >= 13 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Deu um erro aí porra')
}