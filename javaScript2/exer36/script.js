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

// function* geradora2() {
//     yield 'valor 1'
//     yield 'valor 2'
//     yield 'valor 3'
// }
// const g2 = geradora2()

// for (let valor of g2) {
//     console.log(valor)
// }

// function* geradora3() {
//     let i = 0
//     while (true) {
//         yield i
//         i++
//     }
// }
// const g3 = geradora3()
// console.log(g3.next().value)
// console.log(g3.next().value)
// console.log(g3.next().value)
// console.log(g3.next().value)
// console.log(g3.next().value)
// console.log(g3.next().value)
// console.log(g3.next().value)

function* geradora() {
    yield 1
    yield 2
    yield 3
}
function* geradora2() {
    yield* geradora()

    yield 4
    yield 5
    yield 6
}
const gera = geradora2()
for (let gerando of gera) {
    console.log(gerando)
}