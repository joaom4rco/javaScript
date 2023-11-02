const objt = [...document.getElementsByTagName('div')]

const botao = document.getElementById('botao-mudar')
botao.addEventListener('click', function(e){
         objt.forEach(Element => {
         Element.innerHTML = 'ola mundo'
         objt[0].style.color = 'red'
    })
    botao.style.marginTop = '50px'
    console.log(e)
})
