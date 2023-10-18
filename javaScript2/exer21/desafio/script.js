const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

function texto() {
    for (let i = 0; i < elementos.length; i++) {
        mensagem(elementos[i].texto )
    }
}

const texto2 = texto()
function criarP() {
    const p = document.createElement('p')
    return p 
}

function criarDiv() {
    const div = document.createElement('div')
    return div 
}

function criarFooter() {
    const footer = document.createElement('footer')
    return footer 
}
function criarSection() {
    const section = document.createElement('section')
    return section 
}
function mensagem(msg) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criarP() 
    p.innerHTML = msg
    resultado.appendChild(p)

    const div = criarDiv() 
    div.innerHTML = msg
    resultado.appendChild(div)

    const footer = criarFooter() 
    footer.innerHTML = msg
    resultado.appendChild(footer)

    const section = criarSection() 
    section.innerHTML = msg
    resultado.appendChild(section)
}