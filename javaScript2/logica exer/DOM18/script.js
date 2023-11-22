function anoNascimentoUsuario() {
  return {
    idade:document.querySelector('#idade').value,

    data() {
    const dataAtual = new Date().getFullYear()
    return dataAtual
    
    },
    calculoIdade() {
        
    }
  }  
}
