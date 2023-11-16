function validaSenha() {
    return {
        inputSenha: document.querySelector('#isenha'),
        botaoSenha: document.querySelector('#button-Senha'),
        senha() {
            this.botaoSenha.addEventListener('click', e => {
                const senhaUsuario = this.inputSenha.value

                const arraySenha = []
                arraySenha.push(senhaUsuario)
                if(arraySenha.length > 8 && arraySenha.some(palavra => /(A - Z))) 

                this.inputSenha.value = ''
            }) 
        }
    }
}
const senha = validaSenha()
senha.senha()