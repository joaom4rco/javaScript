
function makeSize(size) {
    return function() {
        document.body.style.fontSize = size + 'px'
    }
}
let fSize12 = makeSize(20)
let fSize14 = makeSize(64)
let fSize16 = makeSize(30)

document.querySelector('#size-12').onclick = fSize12
document.querySelector('#size-14').onclick = fSize14
document.querySelector('#size-16').onclick = fSize16