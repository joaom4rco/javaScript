
function mediaAno() {
    const aluno = {
        nome: 'joao',
        media1: 7,
        media2: 0,
        media3: 6
    }
    const {nome:nm, media1:md1, media2:md2, media3: md3} = aluno;
    const calcMedia = md1 + md2 + md3 ;
    if (calcMedia >= 15) {
        console.log(`a media do aluno ${nm} foi de ${calcMedia} e ele passou de ano`);
    }else {
        console.log(`a media do aluno ${nm} foi de ${calcMedia} e ele não passou de ano, e tem que fazer a recuperação`);
    }
}
mediaAno();
