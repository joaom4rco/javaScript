function Professor(nome, disciplina,  salario) {
    this.nome =  nome
    this.disciplina = disciplina
    this.salario = salario
}
Professor.prototype.descontoInss = function () {
    if(this.salario <= 1320) {
        this.salario = this.salario - (this.salario * (9 / 100))
    }
    if(this.salario >= 1321 && this.salario <= 2571) {
        this.salario = this.salario - (this.salario * (12/ 100))
    }
    if(this.salario >= 2572 && this.salario <=) {
        this.salario = this.salario - (this.salario * (percentual / 100))
    }
}


const p1 = new Professor('joao marco', 'matematica', 1500)