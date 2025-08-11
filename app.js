// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creo una variable que se llama amigos y esto sera para hacer un array donde se guardaran los datos en varias posiciones. 
let amigos = [];
let sorteo = '';

//Esta función toma el elemento HTML con id `listaAmigos` y muestra en él todos los nombres del array `amigos`, separados por " - ".
function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');//Aqui llamo al ID listaAmigos que es el encargado de mostrar en pantalla.
    lista.innerHTML = ` ${amigos.join(' - ')} `;//Con esto muestro la lista de los nombres  en pantalla y uso el join para hacer espacios entre nombre y nombre.
   }

function mostrarResultados(){
    let result = document.getElementById('resultado');//Aqui llamo al ID resultados que es el encargado de mostrar en pantalla.
    result.innerHTML = ` ${resultado} `;
}


//Creo una funcion donde hago funcionar el boton añadir.
function agregarAmigo() {
    //Creo la variable nombre para guardar el dato en la caja de texto.
    //Para hacer uso de la caja de texto uso document.getElementById y en vez de usar imput, lo llamo con su ID que es amigo.
    //Uso .value para que el return me retorne el valor y no el objeto.
    let nombre = document.getElementById('amigo').value;
    console.log(amigos);// Me permite ver los nombres ingreados en la consola, esto es para verificar si estan guardando los datos.

    //Verifico que el input no este vacio, si esta vacio, muestro un mensaje de alerta.
    if (nombre === '') {
        alert('Por favor, ingrese un nombre valido.');
        return;
    }
    amigos.push(nombre); // Con .push Agrega el nombre a la variable amigos.
    document.getElementById('amigo').value = ''; // Con esto limpio el valor del imput amigo.
   
      mostrarListaAmigos();//Llamo a la funcion y con esto puedo mostrar en pantalla actualizando cada vez que agrega un nombre.
}


 function sortearAmigo(){


    let sorteo = amigos[Math.floor(Math.random() * amigos.length)];// Aqui lo que se hace es sortear con un numero ramdon las posiciones del array amigos.
    console.log(`El amigo secreto es: ${sorteo}`);

    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');// Con esta condicion lo que hago es mandar un mensaje de alerta diciendo que no hay amigos para sortear si la lista esta vacia.
        return;
    }

    resultado = sorteo;

    mostrarResultados();

    // Con esto limpio la lista.
    document.getElementById('listaAmigos').innerHTML = '';

    // Aqui deshabilito los botones después de sortear para dar como finalizado la ejecucion.
    //En el HTML cree un id en el boton Agregar y Sortear para poder deshabilitarlos.
    document.getElementById('Agregar').disabled = true;
    document.getElementById('Sortear').disabled = true;

 }