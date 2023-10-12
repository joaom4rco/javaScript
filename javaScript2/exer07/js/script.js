const num1 = Number(prompt('digite um número')) 
const numeroTitulo = document.getElementById('numero__titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = num1;
texto.innerHTML += `<p> Raiz quadrada: ${num1 ** 0.5}</p>`;
texto.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)} </p>`;
texto.innerHTML += `<p>é NaN: ${Number.isNaN(num1)} </p>`;
texto.innerHTML += `<p>arredondando ara baixo: ${Math.ceil(num1)} </p>`;
texto.innerHTML += `<p>arredondando ara baixo: ${Math.floor(num1)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${num1.toFixed(2)} </p>`;
