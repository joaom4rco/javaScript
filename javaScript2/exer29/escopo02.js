function conta (x) {
    return function(y) {
        return x - y
    }
}
let add = conta(4)
let addN = conta(6)
console.log(add(5))