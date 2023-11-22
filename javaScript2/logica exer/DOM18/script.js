function anoNascimentoUsuario() {
  return {
    idade:document.querySelector('#idade'),
    button:document.querySelector('#button'),
    masculino: document.querySelector('#sexoMas'),
    feminino: document.querySelector('#sexoFe'),
    data() {
    const dataAtual = new Date().getFullYear()
    return dataAtual

    },
    calculoIdade() {
        this.button.addEventListener('click', e => {
            const conta = Number(this.data()) - Number(this.idade.value) 
            console.log(conta)
            this.idade.value = ''
        })
    }
  }  
}

const nascimento = anoNascimentoUsuario()
nascimento.calculoIdade()