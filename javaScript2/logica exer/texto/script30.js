function texto() {
    return{
        textoLorem: '',
        lengthTexto() {
            this.textoLorem =  document.querySelector('#lorem').innerText
            const array = []
            array.push(this.textoLorem)
            console.log(array)
        }
    }
}
window.onload = function() {
    const text = texto();
    text.lengthTexto();
}
