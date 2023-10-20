const frutas = ['melancia','uva','banana']
for (let i in frutas) {
    console.log(frutas[i])
}


const pessoa = {
    nome: 'joao',
    sobrenome: 'santos',
    idade: 18
}
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}