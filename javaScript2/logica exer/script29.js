function tabelaMatematica() {
    return {
        tabuada(n){
            for (let i = 1; i <= 10; i++) {
                console.log(n + 'x' + i + '=' + ' ' + n*i)
            }
        }
    }
}
const tabela = tabelaMatematica()
tabela.tabuada(9)