const displayValorAnterior = document.getElementById('vAnterior');
const displayValorActual = document.getElementById('vActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');


/* const calculadora = new Calculadora();
console.log(calculadora.sumar(2,3))
console.log(calculadora.restar(2,3))
console.log(calculadora.multiplicar(2,3))
console.log(calculadora.dividir(4,2))
console.log(calculadora.factorial(2,3)) */




const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});