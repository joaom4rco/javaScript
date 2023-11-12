// function* geradora() {
//     yield 'valor 1'
//     yield 'valor 2'
//     yield 'valor 3'
// }
// const g1 = geradora()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)

// iterando sobre a função geradora

function* geradora2() {
    yield 'valor 1'
    yield 'valor 2'
    yield 'valor 3'
}
const g2 = geradora2()

for (let valor of g2) {
    console.log(valor)
}