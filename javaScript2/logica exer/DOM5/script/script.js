const contador = document.querySelector('#botao') 
const zerar = document.querySelector('#botaozerar') 
const resultado = document.querySelector('.resultado')
const container = document.querySelector('.container')
contador.addEventListener('click',(e)=>{
    const el = e.target
    el.classList.add('bad')
})