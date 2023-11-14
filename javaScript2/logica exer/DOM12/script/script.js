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
const number = [1,2,3,4,5,6,7,8,9]
const num = numero(number)
