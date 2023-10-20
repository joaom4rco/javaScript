const nomes = ['joao', 'marco', 'gabriel'] 

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

console.log('')

for (let i in nomes) {
    console.log(nomes[i])
}
console.log('')

for (let i of nomes) {
    console.log(i)
}