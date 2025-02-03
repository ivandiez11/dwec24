// Obtener el elemento con id 'input2' Obtén por consola, al menos de 2 formas diferentes(en caso de existir varias alternativas):
const input2 = document.getElementById('input2');
const input2Alt = document.querySelector('#input2');
console.log(input2Alt);
console.log(input2);

// Obtener la colección de párrafos
const parrafos = document.getElementsByTagName('p');
const parrafosAlt = document.querySelectorAll('p');
console.log(parrafos);
console.log(parrafosAlt);

//Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’ (id=’lipsum’)
const parrafosLipsum = document.getElementById('lipsum').getElementsByTagName('p');
const parrafosLipsumAlt = document.querySelectorAll('#lipsum p');
console.log(parrafosLipsum);
console.log(parrafosLipsumAlt);

//El formulario (ojo, no la colección con el formulario sino sólo el formulario) 
const formulario = document.getElementsByTagName('form');
const formularioAlt = document.querySelector('form');
console.log(formulario);
console.log(formularioAlt);

//Todos los inputs
const inputs = document.getElementsByTagName('input');
const inputsAlt = document.querySelectorAll('input');
console.log(inputs);
console.log(inputsAlt);