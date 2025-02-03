function CambiarTexto() {
    let nuevoTexto = document.getElementById("idTexto").value; 
    document.getElementById("idSpanTexto").innerHTML = nuevoTexto;   
}

function CambiarColorFondo() {
    let nuevoColor = document.getElementById("idColorFondo").value;
    document.getElementById("idDivTexto").style.backgroundColor = nuevoColor;
}

function CambiarColorBorde() {
    let nuevoColorBorde = document.getElementById("idColorBorde").value;
    document.getElementById("idDivTexto").style.borderColor = nuevoColorBorde;
}

function CambiarColorTexto() {
    let nuevoColorTexto = document.getElementById("idColorTexto").value;
    document.getElementById("idSpanTexto").style.color = nuevoColorTexto;
}

// CambiarTexto();
// CambiarColorFondo();
// CambiarColorBorde();
// CambiarColorTexto();