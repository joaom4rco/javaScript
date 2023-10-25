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
try {
    const data = new Date('18-05-2000 12:50:20')
    const hora = novaData()
    console.log(hora)
}catch (erro) {
    //tratar erro
}finally {
    console.log('tenha um bom dia')
}
