function validaSenha() {
    return {
        inputSenha: document.querySelector('#isenha'),
        botaoSenha: document.querySelector('#button-Senha'),
        senha() {
            this.botaoSenha.addEventListener('click', e => {
                const senhaUsuario = this.inputSenha.value

                
                if(senhaUsuario.length >= 8 &&/[A-Z]/.test(senhaUsuario) && /\W|_/.test(senhaUsuario) &&/[a-z]/.test(senhaUsuario)){
                    alert('voce foi cadastrado')
                    this.inputSenha.value = ''
                } else {
                    e.preventDefault()
                    alert('A senha deve ter pelo menos 8 caracteres, incluir pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial.')
                }
                console.log(senhaUsuario)
                
            }) 
        }
    }
}
const senha = validaSenha()
senha.senha()