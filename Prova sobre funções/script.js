const botao = document.getElementById('botao');
botao.addEventListener('click', () => {

    const nome = String(document.getElementById('nomeInput').value);
    const anoNascimento = Number(document.getElementById('nascimentoInput').value);
    var anoAtual = 2023

    var idade = calculaIdade(anoNascimento, anoAtual)
    var entrada = verificaStatus(idade)
    mostraResultado(nome, idade, entrada)


})

function verificaStatus(idade){
    var verificar
    if(idade >= 18){
        verificar = "maior de idade"
    }else if( idade < 18 ){
        verificar = "menor de idade"
    }

    return verificar
}
function calculaIdade(anoNascimento, anoAtual){
    var idade = anoAtual - anoNascimento
    return idade;
}

function mostraResultado(nome, idade, entrada){
    alert(nome + " " + idade + " anos, " + entrada)
}
