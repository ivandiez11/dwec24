//Confirmar el pedido (simular un tiempo de espera). Mediante un Math.random del 80%  2 seg. Confirmando… Confirmado
function confirmarPedido() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                console.log("Confirmando... ✅Confirmado");
                resolve();
            } else {
                reject("❌Por favor, intenta hacer el pedido nuevamente");
            }
        }, 2000);
    });
}


//Preparar la comida (esperar un poco más). 4 sg preparando … preparado
function prepararComida(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Preparando... 🍔Preparado");
            resolve();
        }, 6000);
    });
}

//Enviar el pedido al repartidor (esperar nuevamente). 6 seg Enviando… Entregado
function enviarPedido(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🏠Enviando...  🚴‍♂️Entregado");
            resolve();
        }, 10000);
    });
}


confirmarPedido();
prepararComida();
enviarPedido();