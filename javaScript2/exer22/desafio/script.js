const paragrafos = document.querySelector('.resultado')
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundBody = estilosBody.backgroundColor
console.log(backgroundBody)

for (let p of ps) {
    p.style.background = backgroundBody
    p.style.color = 'white'
    p.style.marginBottom = '20px'
}