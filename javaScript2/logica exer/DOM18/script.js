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
            this.img()
        })
    },
    img() {
        let genero = this.masculino.checked ? 'homem' : 'mulher';
        let faixaEtaria = '';
  
        if (this.anoNascimento >= 60) {
           this.imagem.src = 'https://lillo.com.br/pub/media/magefan_blog/2017/04/a-crianca-de-2-anos.jpg'
           faixaEtaria = 'idoso'
        } else if (this.anoNascimento >= 18) {
          this.imagem.src = 'https://lillo.com.br/pub/media/magefan_blog/2017/04/a-crianca-de-2-anos.jpg'
          faixaEtaria = 'adulto'
        } else if (this.anoNascimento >= 11) {
          this.imagem.src = 'https://eyc7xs8f99a.exactdn.com/blog/wp-content/uploads/adolescente-em-primeiro-plano.jpg'
          faixaEtaria = 'adolescente'
        } else if (this.anoNascimento >= 1) {
            this.imagem.src = 'https://lillo.com.br/pub/media/magefan_blog/2017/04/a-crianca-de-2-anos.jpg'
            faixaEtaria = 'crinaça'
        }
  
        console.log(`Sou um(a) ${faixaEtaria} e ${genero}`);
      },
  }  
}

const nascimento = anoNascimentoUsuario()
nascimento.calculoIdade()