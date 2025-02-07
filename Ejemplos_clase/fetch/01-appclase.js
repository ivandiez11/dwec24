const cargarTxtBtn = document.querySelector('#cargarTxtbtn');
cargarTxtBtn.addEventListener('click', obtenerDatosTXT);

function obtenerDatosTXT() {
    const url = 'data/datos.txt';
    fetch(url)
        .then(respuesta =>{
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.statusText)
            console.log(respuesta.url)

            return respuesta.text();
        })
        .then(data => {
            console.log(data);
        }
        )
         

}



