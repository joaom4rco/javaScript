const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi () {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value)
    }
})

function limpaTarefa() {
    inputTarefa.value = ''
    inputTarefa.focus()
}
function criarBotaoApagar (li) {
    li.innerText +=' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esse conteúdo')
    li.appendChild(botaoApagar)
}
function criarTarefa(textoInput) {
    console.log(textoInput)
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaTarefa()
    criarBotaoApagar (li)
}

btnTarefa.addEventListener('click', (e) =>{
    if (!inputTarefa.value) return;

     criarTarefa(inputTarefa.value)
})
document.addEventListener('click', (e) => {
    const el = e.target
    if
})
