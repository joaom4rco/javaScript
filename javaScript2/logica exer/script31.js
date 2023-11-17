//Implementar uma função que receba um número e retorne todos os números primos menores ou iguais a ele.

function numero(n) {
    return {
        numerosPrimos() {
            for(var i = 2; i < n; i++)
            if(n % i === 0) return false;
            return n > 1;
        }
    }
}
const n = numero(11)
console.log(n.numerosPrimos())