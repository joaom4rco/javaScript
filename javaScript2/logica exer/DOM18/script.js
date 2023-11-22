function anoNascimentoUsuario() {
  return {
    idade:document.querySelector('#idade'),
    button:document.querySelector('#button'),
    masculino: document.querySelector('#sexoMas'),
    feminino: document.querySelector('#sexoFe'),
    imagem: document.querySelector('#imagem img'),
    anoNascimento: null,
    data() {
    const dataAtual = new Date().getFullYear()
    return dataAtual

    },
    calculoIdade() {
        this.button.addEventListener('click', e => {
            const conta = Number(this.data()) - Number(this.idade.value) 
            console.log(conta)
            this.idade.value = ''
            this.anoNascimento = conta
            this.imgHomem()
            this.imgMulher()
        })
    },
    imgHomem() {
        if(this.anoNascimento >= 60 && this.masculino.checked === true && this.feminino.checked === false ) {
            console.log('ola')
        }else if(this.anoNascimento >= 18 && this.anoNascimento < 60 && this.masculino.checked === true && this.feminino.checked === false) {
            console.log('sou adulto')
        }else if(this.anoNascimento < 18 && this.anoNascimento >= 11 && this.masculino.checked === true && this.feminino.checked === false) {
            console.log('sou adolesçente')
        }else if (this.anoNascimento < 11 && this.anoNascimento >= 1 && this.masculino.checked === true && this.feminino.checked === false) {
            console.log('sou crinça')
        }
    },
    imgMulher() {
        if(this.anoNascimento >= 60 && this.feminino.checked === true && this.masculino.checked === false ) {
            console.log('ola e m')
        }else if(this.anoNascimento >= 18 && this.anoNascimento < 60 && this.feminino.checked === true && this.masculino.checked === false) {
            console.log('sou adulta ')
        }else if(this.anoNascimento < 18 && this.anoNascimento >= 11 && this.feminino.checked === true && this.masculino.checked === false) {
            console.log('sou adolesçente e m')
        }else if(this.anoNascimento < 11 && this.anoNascimento >= 2 && this.feminino.checked === true && this.masculino.checked === false) {
            console.log('sou crinça e m')
        }
    },
  }  
}

const nascimento = anoNascimentoUsuario()
nascimento.calculoIdade()