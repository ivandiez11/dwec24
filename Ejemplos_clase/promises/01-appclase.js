const paises=['Francia','España','Australia', 'Italia'];
function mostrarPaises(){
    setTimeout(()=>{
        paises.forEach((pais)=>{
          console.log(pais);
        });
    },2000); 
}


function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },2000);
}

mostrarPaises();
nuevoPais('Alemania',mostrarPaises);