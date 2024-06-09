"Use strict"

consultarObjetos();

function consultarObjetos(){
        let xhttp;

        xhttp = new XMLHttpRequest();
        xhttp.onload = function (){myFunction(this);}
        xhttp.open("GET", "objetos.xml");
        xhttp.send();
}

function myFunction(xml){
    let xmlDoc, table, objetos, i;

    xmlDoc = xml.responseXML;
    objetos = xmlDoc.getElementsByTagName("prueba");
    table =
        "<table>" +
            "<thead>" +
                "<tr><th>Nombre</th><th>Descrición</th><th>Características</th>"
            "</thead>" +
            "<tbody>"
    for (i = 0; i <objetos.length; i++){
         table += "<tr>" +
                        
                     "<td>" + xmlDoc.getElementsByTagName("nombre")[i].childNodes[0].nodeValue + "</td>" +
                     "<td>" + xmlDoc.getElementsByTagName("descricion")[i].childNodes[0].nodeValue + "</td>" +
                     "<td>" + xmlDoc.getElementsByTagName("caracteristicas")[i].childNodes[0].nodeValue + "</td>" +
                 "</tr>";
     }
    table +=
            "</tbody>" +
        "</table>";

        document.getElementById("objetos").innerHTML = table;
}           