const a = {
    nome: 'joao',
    idade: 18
}
const b = a
a.nome = 'maria'
console.log(a,b)

const c = {
    nome: 'joao',
    idade: 18
}
const d = {...c}
c.nome = 'maria'
console.log(c,d)