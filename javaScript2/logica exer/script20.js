function fizzBuzz(numero) {
    if (typeof numero !== 'number') {
        return 'não é um numero'
    }
    if (numero % 5 ===0 && numero % 3 ===0) {
        return 'fizzBuzz'
    } 
    if (numero % 3 ===0) {
        return 'fizz'
    }
     if (numero % 5 ===0){
        return 'buzz'
    }
    return numero
    
}
for (let i =0; i < 100; i++ ) {
    console.log(i, fizzBuzz(i))
}