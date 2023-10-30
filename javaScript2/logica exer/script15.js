function notaSemestre() {
    const aluno = {
        nome:'joao',
        nota1: 0.5,
        nota2: 0,
        nota3: 3
    }
    const {nome:nm, nota1: n1, nota2: n2, nota3: n3} = aluno
    const media = n1 + n2 + n3
    if (media >= 5) {
        console.log(`a sua media foi ${media} e você ficou com nota azul`)
    }else {
        console.log(`sua media foi ${media} você ficou com nota vermelha `)
    }
}
notaSemestre()