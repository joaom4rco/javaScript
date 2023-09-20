let numero = Number(prompt('digite um numero'))
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}<br>`;
document.body.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero)} <br>`
document.body.innerHTML += `seu número é NaN?:${Number.isNaN(numero)} <br>`
document.body.innerHTML += `Aredondado para baixo:${Math.floor(numero)} <br>`
document.body.innerHTML += `Aredondado para cima:${Math.ceil(numero)} <br>`
document.body.innerHTML += `com duas casas decimais: ${numero.toFixed(2)}`;