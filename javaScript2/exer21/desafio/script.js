const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'div', texto: 'frase 3'},
    {tag: 'div', texto: 'frase 4'},
    
]
const resultado = document.querySelector('.resultado')
const div = document.createElement('div')
for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let criaTag = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    criaTag.appendChild(textoCriado);
    div.appendChild(criaTag);
}
resultado.appendChild(div)