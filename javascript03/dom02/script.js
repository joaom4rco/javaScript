const objt = [...document.getElementsByTagName('div')]

const botao = document.getElementsByTagName('button')
botao = addEventListener('click', function(e){
    objt.forEach(Element => {
        Element.innerHTML = 'ola mundo'
        objt[0].style.color = 'red'
    })
})