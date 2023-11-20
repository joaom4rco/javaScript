const carro = {
    marca: 'ford',
    ano:'2020'
}
Object.defineProperties(carro, {
    marca: {
        writable:false
    }
})
Object.freeze(carro)
carro.ano = 2019
console.log(Object.getOwnPropertyDescriptor(carro, 'marca'))
console.log(Object.entries(carro))
console.log(Object.values(carro))