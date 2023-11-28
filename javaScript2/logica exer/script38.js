function Professor(nome, disciplina,  salario) {
    this.nome =  nome
    this.disciplina = disciplina
    this.salario = salario
}
Professor.prototype.descontoInss = function () {
    if(this.salario <= 1320) {
        this.salario = this.salario - (this.salario * (7.5 / 100))
    }
    if(this.salario >= 1321 && this.salario <= 2571) {
        this.salario = this.salario - (this.salario * (9/ 100))
    }
    if(this.salario >= 2572 && this.salario <= 3856) {
        this.salario = this.salario - (this.salario * (12 / 100))
    }
    if(this.salario >= 3857) {
        this.salario = this.salario - (this.salario * (14 / 100))
    }
}


const p1 = new Professor('joao marco', 'matematica', 1500)
p1.descontoInss()
console.log(p1)