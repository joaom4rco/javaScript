//mudando o valor do array e deletando ele
// const nomes = ['eduardo','maria','antonio']
// nomes[2] = 'joao'
// delete nomes[2]
// console.log(nomes)


// valor por referencia
// const nomes = ['eduardo','maria','antonio']
// const novo = nomes.pop()
// console.log(nomes, novo)

// cópia do array
const nomes = ['eduardo','maria','antonio']
const novo = [... nomes]
novo.pop()
console.log(nomes, novo)