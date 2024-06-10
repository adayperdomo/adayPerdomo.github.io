consultarObjetos()
function consultarObjetos(){
    let xhhtp

    xhhtp = new XMLHttpRequest();
    xhhtp.onload = function () {
        mostrarObjetos(this);
    }
    xhhtp.open("GET", "objetos.xml");
    xhhtp.send();
}


function mostrarObjetos(xml){
    let xmlDoc, tabla, nombre, i, descripcion, caracteristicas;

    xmlDoc = xml.responseXML;
    tabla = "<table>";
    tabla += "<tr><th>Nombre</th><th>Descrición</th><th>Características</th></tr>";
    numeroCoches = xmlDoc.getElementsByTagName("objetos").length;
    for(i=0; i<numeroCoches; i++){
        nombre = xmlDoc.getElementsByTagName("nombre")[i].childNodes[0].nodeValue;
        descripcion = xmlDoc.getElementsByTagName("descripcion")[i].childNodes[0].nodeValue;
        caracteristicas = xmlDoc.getElementsByTagName("caracteristicas")[i].childNodes[0].nodeValue;
        tabla += "<tr><td>" + nombre + "</td><td>" + descripcion + "</td><td>" + caracteristicas + "</td></tr>";
    }
    tabla += "</table>";
    
    document.getElementById("objetos").innerHTML = tabla;
}