const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi () {
    const li = document.createElement('li')
    return li
}
function criarTarefa(textoInput) {
    console.log(textoInput)
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
}
btnTarefa.addEventListener('click', (e) =>{
    if (!inputTarefa.value) return;
     criarTarefa(inputTarefa.value)
})
