//pega o botão, input e span do html
const calcular = document.getElementById('btn');
const valor = document.getElementById('valor');
var resultado = document.getElementById('resultado');

//foca no input
valor.focus();

//calcula o valor digitado no input ao clicar no botão
calcular.addEventListener('click', function() {
    
    var calculo = Number(valor.value) * 12;
    resultado.innerHTML = calculo;

    valor.focus();
    valor.value = '';
})