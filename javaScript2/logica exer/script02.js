function numeros (num1, num2) {
    const soma = num1 + num2 
    const sub = num1 - num2 
    const multi = num1 * num2 
    const divi = num1 / num2
    return `a soma desses números é: ${soma}, a subtração desses números é ${sub}, a multiplicação é ${multi} e a divisão é ${divi}`
}
const num1 = 8
const num2 = 2
const conta = numeros(num1, num2)
console.log(conta)