function pedirTamanoTablero() {
    let tamano;
    do {
        tamano = parseInt(prompt("Introduce el tamaño del tablero (entre 5 y 15):"));
    } while (isNaN(tamano) || tamano < 5 || tamano > 15 || tamano === null);
    return tamano;
}


let tamano = pedirTamanoTablero();

function crearTablero() {
    let tablero = "<div class='tablero'>";
    for (let i = 0; i < tamano; i++) {
        tablero += "<div class='fila'>";
        for (let j = 0; j < tamano; j++) {
            tablero += "<div class='celda'><button></button></div>";
        }
        tablero += "</div>"
    }
    tablero += "</div>"
    return tablero;
}

function generarMinas() {
    let minas = [];
    while (minas.length < 10) {
        let mina = Math.floor(Math.random() * 64);
        if (!minas.includes(mina)) {
            minas.push(mina);
        }
    }
    return minas;
}

function mostrarMinas(minas) {
    let celdas = document.querySelectorAll(".celda");
    for (let i = 0; i < minas.length; i++) {
        celdas[minas[i]].classList.add("mina");
    }
}

document.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        let celda = event.target.parentElement;
        if (celda.classList.contains("mina")) {
            alert("¡Boom! Has hecho clic en una mina.");
            mostrarMinas(generarMinas());
        } else {
            celda.classList.add("seguro");
        }
    }
});

document.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        let celda = event.target.parentElement;
        if (celda.classList.contains("mina")) {
            document.body.style.backgroundImage = "url('img/explosion.jfif')";
            celda.innerHTML = "<img src='img/fj.png' alt='Bomba' style='width: 100%; height: 100%;'>";
            mostrarMinas(generarMinas());
        } else {
            celda.classList.add("seguro");
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let tablero = crearTablero();
    document.body.insertAdjacentHTML('beforeend', tablero);
    let minas = generarMinas();
    mostrarMinas(minas);
});


