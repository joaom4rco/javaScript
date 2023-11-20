const produto = {nome: 'mesa', preço: 80}
const novoProduto = {
    ...produto,
    material:'porcelanato',
    criado:2023
}
console.log(novoProduto)
console.log(produto)