let num = [0,1,2,3,4,5,6,7,8,9,10]

for (let numero of num) {
    if (numero === 2 || numero === 5) {
        continue
    }
    console.log(numero)
}