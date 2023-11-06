function criaMulltiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}
const duplica = criaMulltiplicador(2)
const triplica = criaMulltiplicador(3)
const quadriplica = criaMulltiplicador(4)
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))