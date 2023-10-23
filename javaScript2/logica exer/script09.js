function numeros (num1, num2) {
    return num1 || num2;
}
const num1= 51
const num2 = 50
const maiorNum = numeros(num1, num2)
console.log(Math.max(maiorNum))