function salaMensal() {
    const fernando = {
        salario: 3000
    }
    const {salario} = fernando
    const reajusteSalarial = 100
    const novoSalario = salario + reajusteSalarial
    const porcentagemSalarial = (reajusteSalarial * 100/salario).toFixed(2)
    fernando.novoSalario = novoSalario
    fernando.porcentagemSalarial = porcentagemSalarial + '%'
    console.log(fernando)
}
salaMensal()