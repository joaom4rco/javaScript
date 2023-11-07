function retornaNome(nome) {
    return function() {
        return nome
    }
}
const funcao = retornaNome('joao')
console.dir(funcao)
console.log(funcao())

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
}
  
var myFunc = makeFunc();
myFunc();