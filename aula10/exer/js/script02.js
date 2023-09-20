const numero = Number(prompt('Digite seu número'));
const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;
const texto = document.getElementById('texto');

texto.innerHTML = ''
texto.innerHTML += `<p>raiz quadrada:${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro?:${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>seu número é NaN?:${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Aredondado para baixo:${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Aredondado para cima:${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}</p>`;