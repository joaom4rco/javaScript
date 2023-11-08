(function(idade, peso ){
    const sobrenome = 'santos'
    
    function criaNome (nome) {
        return nome + ' ' + sobrenome
    }
    function falaNome () {
        return criaNome('joao')
    }
    function falaIdade() {
        return falaNome() + ' ' + idade +' ' + 'anos'
    }
    function falaPeso() {
        console.log(falaIdade() + ' ' + peso + ' ' + 'kg')
    }
    falaPeso()
})(18, 80)