// const numeros = [11,5,1,6,8,4,2,2,0]
// const numerosDobrados = numeros.map(num => num * 2)
// console.log(numerosDobrados)

//para cada elemento:
//retorne só a string com o nome da pessoa

// const pessoas = [
//     { nome: 'Fernando', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduarda', idade: 55 },
//     { nome: 'Letícia', idade: 60 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 },
// ];
// const nomeDPessoa = pessoas.map(nomes => nomes.nome)
// console.log(nomeDPessoa)


// remova apenas a chave 'nome' do objeto

// const pessoas = [
//     { nome: 'Fernando', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduarda', idade: 55 },
//     { nome: 'Letícia', idade: 60 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 },
// ];
// const nomeDPessoa = pessoas.map(nomes => {
// delete obj.nome
// return obj
// })
// console.log(nomeDPessoa)


//  adicione uma chave ID em cada elemento
const pessoas = [
     { nome: 'Fernando', idade: 62 },
     { nome: 'Maria', idade: 23 },
     { nome: 'Eduarda', idade: 55 },
     { nome: 'Letícia', idade: 60 },
     { nome: 'Rosana', idade: 32 },
     { nome: 'Wallace', idade: 47 },
];
const nomeDPessoa = pessoas.map(obj => {
    
    const random = (min = 100000, max = 999999) => {
        let ID = Math.random() * (max = min) + min
        return Math.floor(ID)
    };

    obj.ID = random()
    return obj
})
console.log(nomeDPessoa)


