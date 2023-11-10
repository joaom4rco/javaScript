function somarNotaDoAluno() {
    return {
        button:document.querySelector('.somar'),
        resultado: document.querySelector('.resultado'),

        resultadoDaMedia() {
            this.button.addEventListener('click',e =>{
                const nomeAluno = prompt('qual o nome do aluno?')
                const primeiraNota = Number(prompt('qual foi a primeira nota?'))
                const segundaNota = Number(prompt('qual foi a segunda nota?'))
                const media = (primeiraNota + segundaNota)/2

                this.resultado.innerHTML = `o nome do aluno é ${nomeAluno} <br>`
                this.resultado.innerHTML += `a primeira nota foi ${primeiraNota} <br>`
                this.resultado.innerHTML += `a segunda nota foi ${segundaNota}<br>`
                
                if(media >= 6) {
                    this.resultado.innerHTML += `sua média foi de ${media}. <span style="color:green;">Você está de parabéns</span>`
                } else {
                    this.resultado.innerHTML += `sua média foi de ${media}. <span style="color:red;">Você precisa estudar mais</span>`
                }
            })
        },


    }
}
const notaAluno = somarNotaDoAluno()
notaAluno.resultadoDaMedia()