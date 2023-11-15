function numero(number) {
    const arr = [ ]
    for(let num of number) {
        if(num % 3 === 0 || num % 5 ===0 ) {
            arr.push(num)
        }
    }
        const conta = arr.reduce((ac, valor) =>{
            return ac + valor 
        },0 )
        console.log(conta);
}
function arrayNovo () {
    const arr = []
    for(let i = 0; i< 1000; i++) {
        arr.push(i)
    }
    return arr
}
arrayNovo()
const number = arrayNovo()
const num = numero(number)