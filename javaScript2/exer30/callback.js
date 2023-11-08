function rand(min = 1000, max = 3000) {
    const num = Math.random() * (min + max) - min
    return Math.floor(num)
}
function fala(callback) {
    setTimeout(function(){
        console.log('messi')
        if(callback) callback()
    }, rand())
}
function fala2(callback) {
    setTimeout(function(){
        console.log('ronaldo')
        if(callback) callback()
    }, rand())
}
// function fala3(callback) {
//     setTimeout(function(){
//         console.log('neymar')
//         if(callback) callback()
//     }, rand())
// }
fala(falacallback)

function falacallback() {
    fala2(fala2callback)
}
const fala2callback = () => {}
