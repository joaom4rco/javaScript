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
        tarefaTexto = tarefaTexto.replace('apagar', ' ').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
    console.log(tarefasJson)
}
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(listaDeTarefas)
    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa)
    }
}
adicionaTarefasSalvas()
document.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('apagar') ) {
        el.parentElement.remove()
    }
});
