const numeroCpf =  '111.177.165-03', cpfLimpo = numeroCpf.replace(/\D+/g, '')
const arrayCpf =  Array.from(cpfLimpo)

if(validaDigitoUm([...arrayCpf]) !== true) return console.log(`\nRESULTADO -> (${numeroCpf}): CPF INVÁLIDO!`);
console.log(`\nRESULTADO -> (${numeroCpf}): ${validaDigitoDois([...arrayCpf])}`);

function validaDigitoUm(cpf) {
        let i = 11,soma = 0

        const somaCpf = cpf.splice(0,9).map((valor) => {
            i--
            return valor * i
        }).reduce((acu, valor) => {
             soma += valor
             return soma
        },0)
        let somaTratada = (11 - (somaCpf % 11))
        if(somaTratada > 9) somaTratada = 0
        if(somaTratada !== Number(cpf[0])) return false;
        return true;
    }
    function validaDigitoDois(cpf) {
        let i = 12, soma = 0
        const cpfSoma = cpf.splice(0,10).map(valor => {
            i-- 
            return valor * i
        }).reduce((acu, valor) => {
            soma += valor
            return soma
        },0)
        let somaTratada = (11 - (
        cpfSoma % 11))
        if (somaTratada >= 10) somaTratada = 0
        if(somaTratada !== Number(cpf[0])) return 'cpf invalido'
        return 'cpf valido'
    }
