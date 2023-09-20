const nome = prompt('qual é o seu nome completo?')
document.body.innerHTML += `seu nome é:<strong> ${nome} </strong><br />`
document.body.innerHTML += `seu nome tem <strong>${nome.length}</strong> letras<br />`
document.body.innerHTML += `A segunda letra do seu nome é:<strong>${nome[1]}</strong>  <br />`
document.body.innerHTML += `Qual o primeiro indice da primeira letra o do seu nome?<strong>${nome.indexOf('o')}</strong> <br />`
document.body.innerHTML += `Qual o último indice da última letra u no seu nome?<strong>${nome.lastIndexOf('u')}</strong><br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são:<strong>${nome.slice(-3)}</strong> <br />`
document.body.innerHTML += `as palavras do seu nome são:<strong>${nome.split(' ')}</strong><br />`
document.body.innerHTML += `seu nome com letras maiúsculas:<strong>${nome.toUpperCase(nome)}</strong><br />`
document.body.innerHTML += `seu nome com letras minúsculas:<strong id="minuscula">${nome.toLowerCase(nome)}</strong> <br />`
 