const fontButton1 = document.querySelector('#size-button1')
const fontButton2 = document.querySelector('#size-button2')
const fontButton3 = document.querySelector('#size-button3')

const button = document.querySelector('#button')
button.addEventListener('click',() =>  {
    fontButton1.style.fontSize = 30 +'px'
    fontButton2.style.color = 'red'
    fontButton3.style.backgroundColor = 'black'
})
