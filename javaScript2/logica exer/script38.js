function Professor(nome, disciplina,  salario) {
    this.nome =  nome
    this.disciplina = disciplina
    this.salario = salario
    let salarioPrivado = salario
    Object.defineProperty(this, 'salario'), {
        value:salario, 
        enumerable: true, 
        configurable: true,

        get: () => {
            
        }
    }
}
const p1 = new Professor('joao marco', 'matematica', 1500)
console.log(p1)