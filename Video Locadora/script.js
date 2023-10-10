function pogger(){
    var filme = String(document.getElementById('filme').value)
    var minutos = Number(document.getElementById('minutos').value)

    var horas = minutos / 60
    horas = horas.toFixed(1)
    horas = Math.floor(horas)

    var minutos2 = minutos % 60
    minutos = minutos2
    
    alert(`O seu filme é: ${filme} e ele têm ${horas} horas e ${minutos} minutos `)
    
}

var button = document.getElementById('button')
button.addEventListener('click', pogger)