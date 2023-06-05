const calcular = document.getElementById('btn');
const numero = document.getElementById('numero');
var resultado = document.getElementById('resultado');
numero.focus()
calcular.addEventListener('click', function() {
    
    var calculo = Number(numero.value) * 12;
    resultado.innerHTML = calculo;
})


