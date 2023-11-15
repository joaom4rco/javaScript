function Cliente() {
    return {
        infoCliente() {
            this.numeroConta()
            this.conta()
        },
        numeroConta() {
        const contaCliente = Math.random() * (999 - 100) + 100
        console.log(Math.floor(contaCliente)) 
        },
        conta() {
            const conta = this.saldoCliente() + this.creditoCliente() - this.debitoCliente()
            console.log(conta)
        },
        saldoCliente() {
            const saldo = Math.random() * (999-0 )+100
            return Math.floor(saldo) 
        },
        creditoCliente() {
            const credito = Math.random() * (200-0) +50
            return Math.floor(credito)
        },
        debitoCliente() {
            const credito = Math.random() * (999-0) +80
            return  Math.floor(credito)
        },
    }
      
}
const novoCliente = Cliente()
novoCliente.infoCliente()