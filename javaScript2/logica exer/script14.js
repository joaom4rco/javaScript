function salarioMensal() {
    const fernando = {
        salario: 3500
    }
    const {salario} = fernando

    const reajusteSalarial = 50
    
    const aumento = Number((reajusteSalarial * salario/100).toFixed(2))
    
    const novoSalario = salario + aumento

    fernando.novoSalario = novoSalario
    fernando.aumentoSalarial = aumento + 'R$'
    console.log(fernando)
}
salarioMensal()