
//Contador de caracteres (max 500)
    function contarCaracteres() {
        var mensaje = document.getElementById("mensaje").value;
        var contador = mensaje.length;
        document.getElementById("mensaje").value = mensaje.substring(0, 500);
        document.getElementById("contador").innerHTML = contador;
        if (contador >= 500) {
            document.getElementById("contador").style.color = "red";
        } else {
            document.getElementById("contador").style.color = "black";
        }
    }
    document.getElementById("mensaje").addEventListener("input", contarCaracteres);
    
//Añadir curso académico
    function agregarCurso() {
        var nuevoCurso = document.getElementById("nuevo_curso").value;
        var select = document.getElementById("curso_academico");
        var option = document.createElement("option");
        option.text = nuevoCurso; 
        select.add(option);
        document.getElementById("nuevo_curso").value = "";
    }

//Seleccionar todos o ninguno
    function seleccionarTodos() {
        var dias = document.getElementsByName("dias");
        var todosSeleccionados = true;
        for (var i = 0; i < 5; i++) {
            if (!dias[i].checked) {
                todosSeleccionados = false;
                break;
            }
        }
        for (var i = 0; i < 5; i++) {
            dias[i].checked = !todosSeleccionados;
        }
    }

    document.getElementsByName("dias")[5].addEventListener("click", toggleSeleccion);                  
    
//Validar formulario
    function validarFormulario() {
    // Validar nombre
        var nombre = document.getElementById("nombre").value;
        if (nombre.length < 2 || nombre.length > 50) {
            document.getElementById("nombre").setCustomValidity("Este elemento no puede estar vacío");
            document.getElementById("nombre").reportValidity();
            return false;
        }
    // Validar NIF
        var nif = document.getElementById("nif").value;
        if (!validarNIF(nif)) {
            document.getElementById("nif").setCustomValidity("NIF incorrecto");
            document.getElementById("nif").reportValidity();
            return false;
        }

    // Validar mensaje
        var mensaje = document.getElementById("mensaje").value;
        if (mensaje.length < 2 || mensaje.length > 500) {
            document.getElementById("mensaje").setCustomValidity("El mensaje debe tener entre 2 y 500 caracteres");
            document.getElementById("mensaje").reportValidity();
            return false;
        }

    // Validar días seleccionados
        var dias = document.getElementsByName("dias");
        var diasSeleccionados = 0;
        for (var i = 0; i < dias.length - 2; i++) {
            if (dias[i].checked) {
                diasSeleccionados++;
            }
        }
        if (diasSeleccionados < 2) {
            document.getElementsByName("dias")[0].setCustomValidity("Debe seleccionar al menos dos días");
            document.getElementsByName("dias")[0].reportValidity();
            return false;
        }
        return true;
    }

    function validarNIF(nif) {
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var numero = nif.substr(0, 8);
        var letra = nif.substr(8, 1).toUpperCase();
        if (letras.charAt(numero % 23) === letra) {
            return true;
        }
        return false;
    }

    // Validar formulario al enviar
    document.getElementById("formulario").addEventListener("enviar", validarFormulario);
    
    // Botón borrar datos
    document.getElementById("borrar").addEventListener("click", borrarDatos);
    function borrarDatos() {
        document.getElementById("formulario").reset();
    }
    