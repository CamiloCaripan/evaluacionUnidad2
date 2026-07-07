let contador = 15;

const botonContador = document.querySelector('#btn-contador');
const footerContador = document.querySelector('#footer-contador');

const cardTitulo = document.querySelector('#card-titulo');
const cardTexto = document.querySelector('#card-texto');
const cardImagen = document.querySelector('#card-imagen');

botonContador.addEventListener('click', function() {
    
    contador = contador - 1;

    if (contador < 0) {
        contador = 15;


    
    }


    botonContador.textContent = `Presioname ${contador}`;
    footerContador.textContent = contador;

    console.log('Estado del contador actualizado:', contador);
});