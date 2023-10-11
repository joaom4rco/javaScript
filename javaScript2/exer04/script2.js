let varA = 'a'
let varB = 'b'
let varC = 'c'

const varATempo = varA
varA = varB
varB = varC
varC = varATempo
console.log(varA,varB, varC)