const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')
const elementosBody = getComputedStyle(document.body)
const backgroundBody = elementosBody.backgroundColor
ps.forEach(element => {
    element.style.backgroundColor = backgroundBody
});
// for (let p of ps) {
//     p.style.backgroundColor = backgroundBody
// }