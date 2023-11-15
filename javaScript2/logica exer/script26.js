function triangulo(a , b , c ) {
    return {
        trianguloPerfeito() {
            if (a < b + c && b < a + c && c < a+b) {
                console.log('temos um triângulo perfeito')
            } else{
                console.log('não temos um triângulo perfeito')
            }
        }
    }
}

const novoTriangulo = triangulo(20,20,10)
novoTriangulo.trianguloPerfeito()