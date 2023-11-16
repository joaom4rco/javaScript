function validaSenha() {
    return {
        inputSenha: document.querySelector('#isenha'),
        botaoSenha: document.querySelector('#button-Senha'),
        senha() {
            this.botaoSenha.addEventListener('click', e => {
                const senhaUsuario = this.inputSenha.value

                
                if(senhaUsuario.length >= 8 &&/[A-Z]/.test(senhaUsuario) && /\W|_/.test(senhaUsuario) &&/[a-z]/.test(senhaUsuario)){
                    alert('voce foi cadastrado')
                } else {
                    e.preventDefault()
                    alert('siga o exemplo de senha a seguir')
                    const alerta = document.getElementById('alerta').onclick
                    alert(alerta)
                }
                console.log(senhaUsuario)
                this.inputSenha.value = ''
            }) 
        }
    }
}
const senha = validaSenha()
senha.senha()