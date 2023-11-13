const num = [10,50,2,3,4,80,65]

const callbackFilter = (valor, indice, array) => valor > 10 ? true : false

// num.push(90,5,50,30,15)

const num2 = num.filter(callbackFilter)
console.log(num2)
