function municipio(){
    const brejoes = {
        eleitores: 10000,
        brancos: 50,
        nulos:100,
        validos: 9850
    }
    const {eleitores, brancos:vb, nulos:vn, validos:vv} = brejoes 
    const calcBrancos = vb * 100/eleitores
    const calcNulos = vn * 100/eleitores
    const calcValidos = vv * 100/eleitores
    console.log(`o numero de eleitores em brejoes é de: ${eleitores}`)
    console.log('')
    console.log(`votos Brancos: ${calcBrancos}%`)
    console.log(`votos nulos: ${calcNulos}%`)
    console.log(`votos validos: ${calcValidos}%`)
}
municipio()
