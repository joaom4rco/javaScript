const usuarioPontuacao = 500
const nivelUsuario = usuarioPontuacao >= 1000 ? 'voce é um usuario vip' : 'voce é um usuario normal'
console.log(nivelUsuario)


const corUsuario = null
const corPadrao = corUsuario || 'blue'
const falaCor = `sua cor é ${corPadrao}`

const nivelDeSombra = [0,1,2,3,4,5,6,7,8,9]
const sombraUsu = nivelDeSombra[3]
const sombraPadrao = sombraUsu || 0
const falaSombra = `seu sombreamento é de ${sombraPadrao}%`

console.log(falaCor, falaSombra)