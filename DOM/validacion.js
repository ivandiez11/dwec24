//Como seleccionar el formulario
var formulario1 = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];
var formulario3 = document.getElementsByTagName("form");
var formulario4 = DocumentTimeline.forms[0];

//Como seleccionar un elemento de un formulario
//miFormulario.element[]
//documetn.getElementsByTagName(Input, Select...)
window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('click', validarNombre, false);
    document.getElementById("enviar").addEventListener('click', validarTelefono, false);
    document.getElementById("enviar").addEventListener('click', validarFecha, false);
}

function validarNombre(){
    var elemento = document.getElementById("nombre");  
     if (elemento.value == ""){
         alert("El campo no puede ser vacio");
         return false;
     }
     return true;
}

function validarTelefono(){
    var elemento = document.getElementById("telefono");  
     if (isNaN(elemento.value)){
         alert("Debe introducir un número");
         return false;
     }
     return true;
}

function validarFecha() {
    var elemento = document.getElementById("fecha");
    var fecha = new Date(elemento.value);
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    if (isNaN(fecha) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        alert("La fecha es incorrecta");
        return false;
    }
    return true;
}

function validarCheck(){
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked){
        alert("Debe ser mayor de edad");
        return false;
    }
    return true;
}


