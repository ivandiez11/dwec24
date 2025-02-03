window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
    return true;
}

function validaEdad(){
    var elemento = document.getElementById("edad");

    if(!elemento.checkValidity()){
        alert("La edad no es válida");
        return false;
    }

    if(elemento.value < 18){
        alert("Debe ser mayor de edad");
        return false;
    }
    return true;
}

function validaNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento, "Debe introducir un nombre");
        }
        if(elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe ser de 2 a 15 caracteres");
        }
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
    if(isNaN(elemento.value)){
        alert("El teléfono debe ser un número");
        return false;
    }
if(!elemento.checkValidity()){
    alert("El teléfono no es válido");
    return false;
}
}

function validar(e){
    if(validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}



function error2(elemento, mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;

}