let varA = 'A' //B
let varB = 'B' //C 
let varC = 'C' //A

numeroTrocado = varA && varB 
nu = varB && varC
na = varC && varA
console.log(`${numeroTrocado} ${nu} ${na}`)

if(true) {
    let varA = 'A' //B
    let varB = 'B' //C 
    let varC = 'C' //A

    const varATemp = varA;
    varA = varB
    varB = varC
    varC = varATemp
    console.log(varA, varB, varC)
}