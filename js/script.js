let conexion ;

function cargaDatos(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarCargaJson; //una vez que conexion haga esto, va a hacer otra funcion 
    conexion.open("GET", "https://rickandmortyapi.com/api/character", true);
    conexion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    conexion.send()
}
function procesarCargaJson(){
    let div = document.getElementById("respuesta");
    if (conexion.readyState == 4 || conexion.readyState == 200) {     
        let datos = JSON.parse(conexion.responseText);
        console.log(datos);
        datos.results.forEach(dato => {
           let p = document.createElement("p");
           let texto = document.createTextNode(dato.name);
           p.appendChild(texto);
           div.appendChild(p); 
            
        });

    }

}




window.onload = cargaDatos(); 