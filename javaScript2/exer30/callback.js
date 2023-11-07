function rand(min = 1000, max = 3000) {
    const num = Math.random() * (min + max) - min
    return Math.floor(num)
}
function fala() {
    setTimeout(function(){
        console.log('messi')
    }, rand())
}
function fala2() {
    setTimeout(function(){
        console.log('ronaldo')
    }, rand())
}
function fala3() {
    setTimeout(function(){
        console.log('neymar')
    }, rand())
}
fala()
fala2()
fala3()