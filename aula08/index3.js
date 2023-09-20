let texto = 'o rato roeu a roupa do rei de roma'

console.log(texto.match(/[a-z]/g))

console.log(texto.search(/[a-z]/g))
console.log(texto.search(/r/))

console.log(texto.replace('rato', 'sapo'))