//el boton que va a desencadenar el consumo del servicio web
let botonServicio = document.getElementById("boton");

//quiero escuchar cuando el usuario haga clic en el boton 
botonServicio.addEventListener('click', consumirServicio);

//funcion para consumir el servicio web
function consumirServicio(){

    //1.crear un objeto de AJAX
    let telefono= new XMLHttpRequest();

    //2. abrir la conexion

    let url="http://jsonplaceholder.typicode.com/users"
    telefono.open('GET',url, true );

    //3. ejecutar la carga de informacion
    telefono.onload = function(){

        let respusta = JSON.parse(  this.responseText);

        console.log([0]);

        nombre.texcontent = respusta[0].name
        

    }

    //4. envio conexion
    telefono.send();



}

