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

// 

function* geradora() {
    yield function() {
        console.log('ola mundo')
    }

    yield function() {
        console.log('oiiii')
    }
}

const gera = geradora()
const fala = gera.next().value
const fala2 = gera.next().value
fala()
fala2()