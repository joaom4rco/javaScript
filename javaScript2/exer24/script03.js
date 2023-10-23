function novaData(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de data!')
    }
    if (!data) {
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
        
    }) ;
}

const hora = novaData()
console.log(hora)