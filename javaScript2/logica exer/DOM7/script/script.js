const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
    
];
const resultado = document.querySelector('.resultado');
const div = document.createElement('div');
for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let criaTag = document.createElement(tag)
    let textoCriado = document.createElement(texto)
    criaTag.appendChild(textoCriado)
}