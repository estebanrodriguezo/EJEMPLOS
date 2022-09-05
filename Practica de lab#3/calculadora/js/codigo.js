const displayValorAnterior = document.getElementById('vAnterior');
const displayValorActual = document.getElementById('vActual');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.fun');


const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});