function notasSemestre(n1,n2,n3,n4) {
    return {
        aluno(nome, sobrenome) {
            return `o(a) aluno(a) ${nome} ${sobrenome} teve uma média de ${this.mediaAluno()}`
            
        },
        notas() {
            const notas = [n1,n2,n3,n4]
            return notas
        },
        mediaAluno() {
            const media = this.notas().reduce((c ,v) => {
                return c + v 
            }, 0) / this.notas().length
            return Number(media.toFixed(1))
        }
    }
}
const aluno1 = notasSemestre(10,5,10,5) 
const aluno2 = notasSemestre(5,4.2,8.4,5) 
const aluno3 = notasSemestre(8,8,0,0) 
const aluno4 = notasSemestre(7,8,7,10) 
const aluno5 = notasSemestre(10,8,4.5,5.7) 
const aluno6 = notasSemestre(7.8,8.4,5,5.5) 
console.log(aluno1.aluno('joao', 'marco'))
console.log(aluno2.aluno('maria', 'luiza'))
console.log(aluno3.aluno('junio', 'marcelo'))
console.log(aluno4.aluno('maria', 'oliveira'))
console.log(aluno5.aluno('oliver', 'gabis'))
console.log(aluno6.aluno('marco', 'carai'))
