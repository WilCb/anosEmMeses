const calcular = document.getElementById('btn');
const valor = document.getElementById('valor');
var resultado = document.getElementById('resultado');
valor.focus()
calcular.addEventListener('click', function() {
    
    var calculo = Number(valor.value) * 12;
    resultado.innerHTML = calculo;
})


