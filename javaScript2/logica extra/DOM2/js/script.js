function somarNotaDoAluno() {
    return {
        button:document.querySelector('.somar'),
        resultado: document.querySelector('.resultado p'),
        resultadoDaMedia() {
            this.button.addEventListener('click',e =>{
                const nomeAluno = prompt('qual o nome do aluno?')
                const primeiraNota = Number(prompt('qual foi a primeira nota?'))
            })
        },


    }
}
const notaAluno = somarNotaDoAluno()
notaAluno.resultadoDaMedia()