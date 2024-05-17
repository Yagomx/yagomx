function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    
    // Eliminar los espacios de la cadena
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    
    // Comprobar si las letras de la cadena son iguales a las letras en reversa
    for (var i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break;
        }
    }
    
    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}

function verificarPalindromo() {
    var frase = document.getElementById("frase").value;
    var resultado = palindromo(frase);
    document.getElementById("resultado").innerText = resultado;
}
