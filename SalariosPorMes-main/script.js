
var meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function adicionar() {

    var mes = Number(document.getElementById("mes").value)
    var valor = Number(document.getElementById("valor").value)


    switch (mes) {
        case 1:
            document.getElementById("row1").hidden = false;
            meses[0] = meses[0] + valor

            document.getElementById("mes1").innerHTML = "R$" + meses[0].toFixed(2);
            total()
            break;

        case 2:
            document.getElementById("row2").hidden = false;
            meses[1] += valor

            document.getElementById("mes2").innerHTML = "R$" + meses[1].toFixed(2);
            total()
            break;

        case 3:
            document.getElementById("row3").hidden = false;
            meses[2] += valor

            document.getElementById("mes3").innerHTML = "R$" + meses[2].toFixed(2);
            total()
            break;

        case 4:
            document.getElementById("row4").hidden = false;
            meses[3] += valor

            document.getElementById("mes4").innerHTML = "R$" + meses[3].toFixed(2);
            total()
            break;

        case 5:
            document.getElementById("row5").hidden = false;
            meses[4] += valor

            document.getElementById("mes5").innerHTML = "R$" + meses[4].toFixed(2);
            total()
            break;
        case 6:
            document.getElementById("row6").hidden = false;
            meses[5] += valor

            document.getElementById("mes6").innerHTML = "R$" + meses[5].toFixed(2);
            total()
            break;
        case 7:
            document.getElementById("row7").hidden = false;
            meses[6] += valor

            document.getElementById("mes7").innerHTML = "R$" + meses[6].toFixed(2);
            total()
            break
        case 8:
            document.getElementById("row8").hidden = false;
            meses[7] += valor

            document.getElementById("mes8").innerHTML = "R$" + meses[7].toFixed(2);
            total()
            break;
        case 9:
            document.getElementById("row9").hidden = false;
            meses[8] += valor

            document.getElementById("mes9").innerHTML = "R$" + meses[8].toFixed(2);
            break;
        case 10:
            document.getElementById("row10").hidden = false;
            meses[8] += valor

            document.getElementById("mes10").innerHTML = "R$" + meses[8].toFixed(2);
            break;
        case 11:
            document.getElementById("row11").hidden = false;
            meses[8] += valor

            document.getElementById("mes11").innerHTML = "R$" + meses[8].toFixed(2);
            break;
        case 12:
            document.getElementById("row12").hidden = false;
            meses[8] += valor

            document.getElementById("mes12").innerHTML = "R$" + meses[8].toFixed(2);
            break;
    }

}

function total(){
    let total = 0

    for(let i = 0; i < meses.length; i++){
        total = total + meses[i]
    }

    document.getElementById("total").innerHTML = "R$" +  total
}


var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionar)

