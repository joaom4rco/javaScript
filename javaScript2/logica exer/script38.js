function Professor(nome, disciplina,  salario) {
    this.nome =  nome
    this.disciplina = disciplina
    let salarioPrivado = salario
    Object.defineProperty(this, 'salario', {
        enumerable: true, 
        configurable: true,

        get: () => {
            return salarioPrivado;
        },
        set: valor => {
            if(typeof salarioPrivado !== 'number')  console.log('o erro está no salario')
            if
            salarioPrivado = valor
        }
    })
}
const p1 = new Professor('joao marco', 'matematica', 1500)
console.log(p1.salario)