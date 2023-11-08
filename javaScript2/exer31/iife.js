(function(idade, peso ){
    const sobrenome = 'santos'
    function criaNome (nome) {
        return nome + ' ' + sobrenome
    }
    function falaNome () {
        return criaNome('joao')
    }
    function falaIdade() {
        return falaNome() + ' ' + idade
    }
    falaIdade()
})(18)