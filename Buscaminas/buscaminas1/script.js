let tamanoMapa;
do {
    tamanoMapa = prompt("Por favor, introduce el tamaño del mapa: ");
    tamanoMapa = parseInt(tamanoMapa);

    if (isNaN(tamanoMapa) || tamanoMapa <= 0 || tamanoMapa >= 21 || tamanoMapa === null) {
        alert("Por favor, introduce un número válido.");
    }
} while (isNaN(tamanoMapa) || tamanoMapa <= 0 || tamanoMapa >= 21 || tamanoMapa === null);

console.log(`El tamaño del mapa es: ${tamanoMapa}`);

function crearMapa() {
    let mapa = [];
    for (let i = 0; i < tamanoMapa; i++) {
        let fila = [];
        for (let j = 0; j < tamanoMapa; j++) {
            fila.push(0);
        }
        mapa.push(fila);
    }
    console.log(mapa);
    return mapa;
}

function pintarMapa(mapa) {
    let tabla = "<table border='1'>";
    for (let i = 0; i < mapa.length; i++) {
        tabla += "<tr>";
        for (let j = 0; j < mapa[i].length; j++) {
            tabla += `<td>${mapa[i][j] === 0 ? '' : mapa[i][j]}</td>`;
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.write(tabla);
}

function arrayDosDimensiones(tamano) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        let fila = [];
        for (let j = 0; j < tamano; j++) {
            fila.push(0);
        }
        array.push(fila);
    }
    return array;
}

function ponerBomba(mapa) {
    let x = Math.floor(Math.random() * tamanoMapa);
    let y = Math.floor(Math.random() * tamanoMapa);

    if (mapa[x][y] === 0) {
        mapa[x][y] = 1;
    } else {
        ponerBomba(mapa);
    }
}

let arrayBidimensional = arrayDosDimensiones(tamanoMapa);
console.log(arrayBidimensional);

let mapa = crearMapa();
pintarMapa(mapa);
