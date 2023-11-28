function Professor(nome, disciplina,  salario) {
    this.nome =  nome
    this.disciplina = disciplina
    this.salarioBruto = salario
}
Professor.prototype.descontoInss = function () {
    let salarioLiquido = this.salarioBruto;
    if(this.salarioBruto <= 1320) {
        salarioLiquido = this.salarioBruto - (this.salarioBruto * (7.5 / 100));
    } else if(this.salarioBruto >= 1321 && this.salarioBruto <= 2571) {
        salarioLiquido = this.salarioBruto - (this.salarioBruto * (9 / 100));
    } else if(this.salarioBruto >= 2572 && this.salarioBruto <= 3856) {
        salarioLiquido = this.salarioBruto - (this.salarioBruto * (12 / 100));
    } else if(this.salarioBruto >= 3857) {
        salarioLiquido = this.salarioBruto - (this.salarioBruto * (14 / 100));
    }
    return salarioLiquido;
}


const p1 = new Professor('joao marco', 'ingles', 2000)
console.log(p1.nome,'professor de:',  p1.disciplina, 'o seu salario é de:',p1.salarioBruto, 'com o desconto do inss ele fica de:',p1.descontoInss())