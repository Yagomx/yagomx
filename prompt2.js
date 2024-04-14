function multi() {
    var num = prompt('Ingresa un número (1-10):', '');
    num = parseInt(num);

    if (num >= 1 && num <= 10) {
        var tablaHTML = "<table>";
        for (var x = 1; x <= 10; x++) {
            var tabla = num * x;
            tablaHTML += "<tr><td>" + num + " x " + x + " = " + tabla + "</td></tr>";
        }
        tablaHTML += "</table>";

        document.getElementById("tabla-container").innerHTML = tablaHTML;
    } else {
        alert("El número debe estar entre 1 y 10.");
    }
}
