cargarJSON()

function cargarJSON() {
    let xmlhttp;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        mostrarJSON(this);
    };
    xmlhttp.open("GET", "protesisENG.json");
    xmlhttp.send();
}

function mostrarJSON(xmlhttp) {
    const obj = JSON.parse(xmlhttp.responseText);
    let codigoHtml = "<h1>Prosthesis</h1>" + "<div class='tarjetas'>";
    let i;

    for (i in obj.protesis) {
        const protesisObj = obj.protesis[i];
        const nombre = protesisObj["nombre"];
        const img = protesisObj["img"];

        codigoHtml +=
            "<div class='t'>" +
                "<h2 class='nombre'>" + nombre + "</h2>" +
                "<img src='" + img + "' alt=''>" +
            "</div>";
    } 

    codigoHtml += "</div>";
    document.getElementById("protesisENG").innerHTML = codigoHtml;
}