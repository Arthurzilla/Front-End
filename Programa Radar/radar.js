function calcularVelocidade() {
  var Vpermitida = Number(document.getElementById("inVelocidade").value);
  var Vcarro = Number(document.getElementById("inCarro").value);

  VerificarVelocidade(Vcarro, Vpermitida);
  
 
}

function VerificarVelocidade(Vcarro, Vpermitida){
    if (Vcarro <= Vpermitida) {
        SemMulta();
      } else if (Vcarro <= Vpermitida * 1.2) {
        MultaLeve();
      } else if (Vcarro > Vpermitida * 1.2) {
        MultaGrave();
      }
  }

function SemMulta() {
  document.getElementById("outResultado").textContent = "Sem multa";
}

function MultaLeve() {
  document.getElementById("outResultado").textContent = "Multa leve";
}

function MultaGrave() {
  document.getElementById("outResultado").textContent = "Multa Grave";
}

var btverificar = document.getElementById("btVerificar");
btverificar.addEventListener("click", calcularVelocidade);


