//Confirmar el pedido (simular un tiempo de espera). Mediante un Math.random del 80%  2 seg. Confirmando… Confirmado
function confirmarPedido() {
    return new Promise((resolve, reject) => {
        console.log("Confirmando...");
        setTimeout(() => {
            Math.random() < 0.8 ? (console.log("✅Confirmado\n"), resolve()) : reject("❌Error al confirmar el pedido\n");
        }, 2000);
    });
}

//Preparar la comida (esperar un poco más). 4 sg preparando … preparado
function prepararComida(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Preparando...");
            setTimeout(() => {
            console.log("🍔Preparado");
            resolve();
            }, 2000);
        }, 4000);
    });
}

//Enviar el pedido al repartidor (esperar nuevamente). 6 seg Enviando… Entregado
function enviarPedido(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("🚴‍♂️Entregando...");
            setTimeout(() => {
            console.log("🏠Entregado");
            resolve();
            }, 4000);
        }, 2000);
    });
}

confirmarPedido()
    .then(() => prepararComida())
    .then(() => enviarPedido())
    .catch((error) => console.log(`${error}🚨Por favor, intenta hacer el pedido nuevamente`));
