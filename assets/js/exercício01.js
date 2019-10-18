
function simuladorSalario (){
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_COMISSAO = 0.1;
    const META_VENDA = 1000;


    var nomeVendedor = document.getElementById('nomeVendedor').value; //captura a valor (nome) digitado //
    var totalVendas = document.getElementById('totalVendas').value;
    

    if(totalVendas >= META_VENDA){
        var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_COMISSAO);
        var comissao = (totalVendas * PERCENTUAL_COMISSAO);
        exibirMensagemResultado(nomeVendedor, salarioBruto, comissao);
    }
    /*
    <div class="col-sm-12 col-md-9 col-lg-9 pt-30">
    <div class="alert alert-success" role="alert" id=>
        <h4>A simple success alert with</h4>
     </div>
    </div>
    */

    console.log('Nome vendedor: ' + nomeVendedor);
    console.log('Total de vendas: ' + totalVendas);
    console.log('salario bruto: ' + salarioBruto);
}
function exibirMensagemResultado(nome, salario, comissao){
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-30">' + 
                     '<div class="alert alert-success" role="alert">' + 
                        '<h4>' + nome + ', seu salario bruto será de R$: ' + salario +'reias.<br> Voce recebou R$' + comissao + 'reais de comissao.</h4>' + 
                    '</div>'    +
                '</div>';
                var mensagemResultado = document.getElementById('mensagemResultado');
                    mensagemSucesso.className = 'row visible'; 
                    mensagemResultado.innerhtml = html;
}