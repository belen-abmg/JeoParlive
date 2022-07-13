// Funcion para pasar a la pagina de categorias 
function bienvenida(){
    document.getElementById("pagInicio").style.display="none";
    document.getElementById("pagCategorias").style.display="block";
}

// Funcion para pasar a la pagina de puntajes e iniciar a jugar y el Alert que le recuerda que tiene que ser 3 Equipos 
function categorias(){
    alert("Hola recuerda que para poder seguir jugando tienen que ser 3 EQUIPOS");
    document.getElementById("pagCategorias").style.display="none";
    document.getElementById("pagPuntaje").style.display="block";
}

function mostrarPregunta(categoria,puntos) {
   document.getElementById("pregunta").open = true
   
   fetch(('http://localhost:3000/'+categoria+'/'+puntos))
   .then(response => response.json())
   .then(data => {
    document.getElementById("pregunta").innerHTML = data
    
   })
}

function cerrarPregunta(){
    document.getElementById("pregunta").open = false
}

console.log("hola si jalo ")