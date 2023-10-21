const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
for (let numero = 0; numero < numeros.length; numero++) {
    if (numero === 4) {
        console.log('retirei o 4')
        continue;
    }
    console.log(numero)
    if (numero === 10) {
        console.log('parei aq')
    break;
    } 
    
}