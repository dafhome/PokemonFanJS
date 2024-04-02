function escribirEnPantalla(texto) {
    let arr = texto;

    arr = arr.split("");
    i = 0;
    let intervalo = setInterval(function () {
        if (i == arr.length - 1) {
            document.getElementById("text").innerHTML += arr[i];
            clearInterval(intervalo);
        }
        else {
            if (arr[i] == " ") {
                document.getElementById("text").innerHTML += arr[i];
                document.getElementById("text").innerHTML += arr[i + 1];
                i += 2;
            } else {
                document.getElementById("text").innerHTML += arr[i];
                i++;
            }
        }
    }, 50);
}
let indice = 0;
let nombre;
const mensajes = ["Hola! ¿Como te llamas?", '', '', "¡Los Pokémon están actuando de manera extraña! ¡Nunca los he visto así!", "Debemos investigar qué está causando este comportamiento. ¿Alguien tiene alguna pista?", "He escuchado rumores sobre un Pokémon legendario que habita en la isla. Quizás tenga algo que ver."];



function inicio() {



    // let nombre = prompt("Indica tu nombre");
    switch (indice) {
        case 1:
            nombre = prompt("Indica tu nombre");
            localStorage.setItem('name', nombre);
            mensajes.splice(2, 1, `Bienvenido ${localStorage.getItem("name")} a Pueblo Paleta. Hoy comienza tu aventura Pokemon.`)
            indice++;

            break;
        case 6:
            window.location.href = "/html/paleta.html";

            break;

        default:
            document.getElementById("text").innerHTML = "";
            escribirEnPantalla(mensajes[indice]);
            indice++;
    }
}



function enter(event) {
    let key = event.key;
    if (key === "Enter") {
        setTimeout(function () {
            inicio();
        }, 500);
    }
}
document.addEventListener("keydown", enter);

//   localStorage.setItem('nombre';nombre);
inicio();