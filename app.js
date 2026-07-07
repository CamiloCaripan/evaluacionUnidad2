let usuarioRegistrado = {
    correo: localStorage.getItem('usuario_correo') || "",
    contraseña: localStorage.getItem('usuario_password') || ""
};


const formulario = document.querySelector('form');
const inputCorreo = document.querySelector('#floatingInput');
const inputContraseña = document.querySelector('#floatingPassword');
const checkboxRecordarme = document.querySelector('#checkDefault');


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    
    const correoIngresado = inputCorreo.value.trim();
    const contraseñaIngresada = inputContraseña.value.trim();
    const quiereRecordar = checkboxRecordarme.checked; 

    
    const alertaPrevia = document.querySelector('.alert');
    if (alertaPrevia) {
        alertaPrevia.remove();
    }

  
    if (correoIngresado === "" && contraseñaIngresada === "") {
        mostrarAlertaBootstrap("Por favor, completa ambos campos. El correo electrónico y la contraseña son obligatorios.");
        return; 
    } 
    else if (correoIngresado === "") {
        mostrarAlertaBootstrap("El campo de correo electrónico no puede estar vacío.");
        return; 
    } 
    else if (contraseñaIngresada === "") {
        mostrarAlertaBootstrap("El campo de contraseña no puede estar vacío.");
        return; 
    }

   
    if (quiereRecordar) {
        usuarioRegistrado.correo = correoIngresado;
        usuarioRegistrado.contraseña = contraseñaIngresada;
        
        localStorage.setItem('usuario_correo', correoIngresado);
        localStorage.setItem('usuario_password', contraseñaIngresada);
        
        console.log('¡Usuario registrado y persistido con éxito!', usuarioRegistrado);
        window.location.href = "dashboard.html"; 
        return;
    }


function mostrarAlertaBootstrap(mensaje) {
    const contenedorAlerta = document.createElement('div'); 
    contenedorAlerta.className = "alert alert-danger alert-dismissible fade show my-3 text-start";
    contenedorAlerta.setAttribute("role", "alert");
    
    contenedorAlerta.innerHTML = `
        <strong>¡Atención!</strong> ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    

    formulario.insertBefore(contenedorAlerta, inputCorreo.closest('.form-floating'));
}