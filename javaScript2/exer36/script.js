function* geradora() {
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
}
const g1 = geradora()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)