const usuarioPontuacao = 500
const nivelUsuario = usuarioPontuacao >= 1000 ? 'voce é um usuario vip' : 'voce é um usuario normal'
console.log(nivelUsuario)


const corUsuario = null
const corPadrao = corUsuario || 'blue'
const nivelDeSombreamento = [0,1,2,3,4,5,6,7,8,9]
const sombreamentoUsu = nivelDeSombreamento[3]
const sombreamentoPadrao = sombreamentoUsu || 0
const fala = `seu sombreamento é`
console.log(corPadrao, sombreamentoPadrao)