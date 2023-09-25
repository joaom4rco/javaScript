// valores primitivos
let a = 'a'
let b = a
console.log(a,b)
a = 'outra coisa'
console.log(a,b)

//valores de referêcia 
let c = [1,5,3,8]
let d = c
console.log(c,d)
c.push(4)
console.log(c,d)
c.pop()
console.log(c,d)
