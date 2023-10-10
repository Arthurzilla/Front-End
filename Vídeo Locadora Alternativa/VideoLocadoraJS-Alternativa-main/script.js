function pogger(){
    var filme = String(document.getElementById('filme').value)
    var minutos = Number(document.getElementById('minutos').value)
    var horas = 0

    while(minutos >= 60){
        minutos = minutos - 60
        horas = horas + 1
    }

    alert(`O seu filme é: ${filme} e ele têm ${horas} horas e ${minutos} minutos `)

}

var button = document.getElementById('button')
button.addEventListener('click', pogger)