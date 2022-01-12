export class ConfiguraçãoCobranca {

    constructor () {
        this.botaoConfiguracoesCobranca = document.querySelector('#botao__configura-cobranca')
        this.secaoConfiguracaoCobranca = document.querySelector('#configuracoes-cobranca')
        this.botaoFechaConfiguracaoCobranca = document.querySelector('#botao__fecha___configuracoes-cobranca')
        
        this.botaoAbriEmail = document.querySelector('#input-email-radio-remessa')
        this.containerEmail = document.querySelector('#container-input-email-remessa')

        this.botaoVinculaConta = document.querySelector('#botao-vincula-conta-retorno')
        this.secaoContasVinculadas = document.querySelector('#secao-contas-vinculadas')

        this.botaoAbreEmailRetorno = document.querySelector('#input-abre-email-retorno')
        this.containerEmailRetorno = document.querySelector('#container-input-email-retorno')

        this.botaoAbreEmailRetorno.addEventListener('click', this.abrirEmailRetorno.bind(this))

        this.botaoVinculaConta.addEventListener('click', this.abrirListaContaVinculadas.bind(this))

        this.botaoAbriEmail.addEventListener('click', this.abrirEmailRemessa.bind(this))
        
        this.botaoConfiguracoesCobranca.addEventListener('click', this.abrirConfiguracaoCobranca.bind(this))
        
        this.botaoFechaConfiguracaoCobranca.addEventListener('click', this.fechaConfiguracaoCobranca.bind(this))
    }

    abrirConfiguracaoCobranca(){ 
        const configuracaoCobranca = this.secaoConfiguracaoCobranca
        configuracaoCobranca.style.display = ` block `
        configuracaoCobranca.style.visibility = `visible`
        configuracaoCobranca.style.opacity = ` 1 ` 
    }
    fechaConfiguracaoCobranca(){ 
        const configuracaoCobranca = this.secaoConfiguracaoCobranca
        configuracaoCobranca.style.display = ` none `
        configuracaoCobranca.style.visibility = `hidden`
        configuracaoCobranca.style.opacity = ` 0 ` 
    }
    abrirEmailRemessa(){
        const containerEmail = this.containerEmail
        const botaoAbriEmail = this.botaoAbriEmail

        
        if(botaoAbriEmail.checked == true ){
            containerEmail.style.visibility = ` visible `
            containerEmail.style.opacity = ` 1 `
        }else{
            containerEmail.style.visibility = ` hidden `
            containerEmail.style.opacity = ` 0 `
        }
         

    }

    abrirEmailRetorno(){
        const containerEmailRetorno = this.containerEmailRetorno
        const botaoAbriEmailRetorno = this.botaoAbreEmailRetorno

        
        if(botaoAbriEmailRetorno.checked == true ){
            containerEmailRetorno.style.visibility = ` visible `
            containerEmailRetorno.style.opacity = ` 1 `
            containerEmailRetorno.style.display = ` flex `
        }else{
            containerEmailRetorno.style.visibility = ` hidden `
            containerEmailRetorno.style.opacity = ` 0 `
            containerEmailRetorno.style.display = ` none `
        }
         

    }

    abrirListaContaVinculadas(){
        const secaoContasVinculadas = this.secaoContasVinculadas

        secaoContasVinculadas.style.display = ` flex `
    }

}