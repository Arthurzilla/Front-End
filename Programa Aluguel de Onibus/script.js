function inicio(){
    const qtdPassageiros = document.getElementById('qtdPassageiros').value;
    const aluguelOnibus = document.getElementById('aluguelOnibus').value;
    var precoPassageiros = calcularValor(aluguelOnibus, qtdPassageiros).toFixed(2)
    var liberar = verificarQuantidade(qtdPassageiros)
    alert(liberar)

    mostrarResultado(liberar, qtdPassageiros, precoPassageiros)
    




}

function calcularValor(x, y){
    return x / y;
}

function verificarQuantidade(x){
    var y
    if(x < 25){
        y = false
    } else if(x >= 25){
        y = true
    }
    return y;
}

function mostrarResultado(liberar, qtdPassageiros, precoPassageiros){
    if(liberar == false){
        alert("não será aceito uma quantidade de passageiros inferior a 25")
    }else if(liberar == true){
        alert(`a quantidade de passageiros será ${qtdPassageiros} e o preço por passageiro será ${precoPassageiros}`)
    }

}

var button = document.getElementById("button")
button.addEventListener('click', inicio)