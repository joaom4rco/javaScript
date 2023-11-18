function notasSemestre(n1,n2,n3,n4) {
    return {
        aluno() {
            this.mediaAluno()
        },
        notas() {
            const notas = [n1,n2,n3,n4]
            return notas
        },
        mediaAluno() {
            const media = this.notas().reduce((c ,v) => {
                return c + v 
            }, 0) / this.notas().length()
            console.log(media)
        }
    }
}
const aluno1 = notasSemestre(10,5,10,5) 
aluno1.aluno()