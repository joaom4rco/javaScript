const num1 = 1;
const num2 = 8;
const num3 = 12;;

const soma = num1 + num2;
const frase = `o resultado da soma de ${num1} e ${num2} é ${soma} `

console.log(frase);

if (soma < num3) {
    console.log(`${soma} é menor que ${num3}`);
}else {
    console.log(`${soma} não é menor que ${num3}`);
}
