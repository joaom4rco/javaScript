function soma(x,y) {
    return x + y
}
const timer = setInterval(function(){
    console.log(soma(5,5))
},990)
setTimeout(function(){
    clearInterval(timer)
}, 5000)