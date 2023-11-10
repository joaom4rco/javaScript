function somarNotaDoAluno() {
    return {
        button:document.querySelector('.somar'),
        resultado: document.querySelector('.resultado'),

        resultadoDaMedia() {
            this.button.addEventListener('click',e =>{
                const nomeAluno = prompt('qual o nome do aluno?')
                const primeiraNota = Number(prompt('qual foi a primeira nota?'))
                const segundaNota = Number(prompt('qual foi a segunda nota?'))

                this.resultado.innerHTML = `o nome do aluno é ${nomeAluno} <br>`
                this.resultado.innerHTML += `a primeira nota foi ${primeiraNota} <br>`
                this.resultado.innerHTML += `o nome do aluno é ${segundaNota}<br>`
            })
        },


    }
}
const notaAluno = somarNotaDoAluno()
notaAluno.resultadoDaMedia()