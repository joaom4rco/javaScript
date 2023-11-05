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
    salvarTarefas()
}

btnTarefa.addEventListener('click', (e) =>{
    if (!inputTarefa.value) return;

     criarTarefa(inputTarefa.value)
})
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('apagar', ' ')
        listaDeTarefas.push(tarefaTexto)
    }
    console.log(listaDeTarefas)
}
document.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('apagar') ) {
        el.parentElement.remove()
    }
});
