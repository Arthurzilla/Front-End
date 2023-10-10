function calcularVelocidade(){

    var velopermitida = Number(document.getElementById("inVelocidade").value);
    var velocarro = Number(document.getElementById("inCarro").value);

    if (velocarro <= velopermitida){
        document.getElementById("outResultado").textContent = "Sem multa"
    }
    else if (velocarro <= velopermitida * 1.2){
        document.getElementById("outResultado").textContent = "Multa leve"
}
    else if (velocarro > velopermitida * 1.2){
        document.getElementById("outResultado").textContent = "Multa Grave"
}

}

    var btverificar = document.getElementById("btVerificar");
    btverificar.addEventListener("click", calcularVelocidade);