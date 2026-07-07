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

    if (contador <= 10 && contador >= 6) {
        botonContador.className = "btn btn-warning";
    } 
    else if (contador <= 5 && contador >= 0) {
        botonContador.className = "btn btn-danger";
    } 
    else {
        botonContador.className = "btn btn-primary";
    }


    botonContador.textContent = `Presioname ${contador}`;
    footerContador.textContent = contador;

    console.log('Estado del contador actualizado:', contador);
});