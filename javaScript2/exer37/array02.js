// nomes.splice(indice, delete, elem1,elem2,elem3, ...)
//               0        1        2       3
const nomes = ['joao', 'maria', 'julio', 'ana']

const removidos = nomes.splice(2, 2,'joao davi', 'maria luiza ' )
console.log(nomes, removidos)