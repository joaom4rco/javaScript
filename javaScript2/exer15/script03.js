const tenhoGrana = true
const taChovendo = false
if (tenhoGrana === true && taChovendo === true || taChovendo === false) {
    console.log('vou sair de casa')
} else if (tenhoGrana === false && taChovendo === false) {
    console.log('tambem vou sair de casa fds')
} else if (tenhoGrana === false && taChovendo === true) {
    console.log('não vou sair de casa')
}
