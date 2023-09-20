/*
joao marco santos tem 18 anos, pesa 80 kg  tem 1.8 de altura e seu IMC é de ? e qual o ano DE SEU NASCIMENTO? 
calculo do imc:// peso / (altura * altura) 
*/
const nome = 'joao marco';
const sobrenome = 'santos';
const idade = 18;
const altura = 1.80;
const peso = 80.0 
const multutiplicacaoAltura = altura * altura 
let imc = peso / multutiplicacaoAltura 
const anoAtual = 2023
let anoNascimento = anoAtual - idade
console.log(nome, sobrenome,'tem',idade,'anos, ele pesa',peso + 'kg tem',altura,'de altura e seu imc é de',imc)
console.log(nome, sobrenome,'naceu em',anoNascimento)
