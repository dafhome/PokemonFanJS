const paleta = [];

for (let xx = 0; xx <= 960; xx += 8) {
    for (let yy = 0; yy <= 600; yy += 8) {
        paleta.push({
            x: xx,
            y: yy,
            pos: 0,
            act: null,
            evento: null
        });
    }
}

const obstaculos = [
    [0, 0, 112, 208],
    [112, 0, 432, 14],
    [464, 0, 960, 14],
    [720, 14, 960, 600],
    [600, 560, 720, 600],
    [496, 584, 600, 600],
    [248, 544, 400, 600],
    [248, 512, 368, 544],
    [240, 584, 248, 600],
    [0, 560, 240, 600],
    [0, 288, 112, 600],
    [160, 152, 200, 192],
    [200, 48, 368, 192],
    [440, 152, 488, 192],
    [488, 48, 656, 192],
    [440, 240, 688, 376],
    [440, 456, 656, 472],
    [192, 296, 368, 312],
    [248, 200, 312, 216],
    [544, 200, 608, 216],
    [304, 320, 368, 344]

]

for (let i = 0; i < paleta.length; i++) {
    let punto = paleta[i];
    for (let z = 0; z < obstaculos.length; z++) {
        if (punto.x >= obstaculos[z][0] && punto.x < obstaculos[z][2] && punto.y >= obstaculos[z][1] && punto.y <= obstaculos[z][3]) {
            punto.pos = 1;
        }
    }
}
console.log(paleta);

const eventos = [
    [432, 0, 456, 14, 1, "/html/paleta.html"],
    [56, 240, 72, 256, 1, "/html/paleta.html"],
    [240, 192, 320, 224, 1, [
        `${localStorage.getItem("name")}, he vivido en esta isla durante décadas y nunca he visto a los Pokémon comportarse así. Algo siniestro está ocurriendo.`,
        "Los ancianos de la aldea hablan de un antiguo Pokémon legendario que habita en los bosques. Su poder puede ser la causa de estos disturbios",
        "Si quieres encontrar respuestas, te aconsejo que busques la Montaña del Espíritu. Allí podrías descubrir más sobre el Pokémon legendario y cómo detener su influencia maligna."]],
    [536, 192, 616, 224, 1, [
        "Los Pokémon que suelo cuidar están actuando de manera extraña últimamente. Parecen asustados y agresivos sin razón aparente.", 
        `${localStorage.getItem("name")} he notado que los Pokémon evitan ciertas áreas de la isla. Tal vez allí encuentres pistas sobre lo que está pasando.`, 
        "La única manera de calmar a estos Pokémon es con la ayuda del Pokémon legendario que habita en la isla. Pero ten cuidado, su poder es inmenso y puede ser peligroso."]],
    [296, 312, 376, 352, 1, [
        "He estado recopilando datos sobre el comportamiento de los Pokémon. Parece que la energía en la isla está fluctuando de manera inusual.", 
        "Mi investigación me ha llevado a creer que el fenómeno está relacionado con la presencia de un Pokémon legendario. Pero necesitamos más pruebas para confirmarlo.", 
        `Si estás dispuesto a ayudar, podríamos ir juntos a la Cueva de las Luminiscencias. Es un lugar conocido por su conexión con los Pokémon legendarios. ${localStorage.getItem("name")} quizás allí encontremos respuestas.`]]

]

for (let i = 0; i < paleta.length; i++) {
    let punto = paleta[i];
    for (let z = 0; z < eventos.length; z++) {
        if (punto.x >= eventos[z][0] && punto.x < eventos[z][2] && punto.y >= eventos[z][1] && punto.y <= eventos[z][3]) {
            punto.act = eventos[z][4];
            punto.evento = eventos[z][5];
            console.log(paleta[i])
        }
    }
}

let personaje = document.getElementById("personaje")
let personaje2 = document.getElementById("personaje2")

let i = 0;
let z = 0;
let i2 = 0;
let x = 64;
let y = 248;
let ancho = 68;
let alto = 72;
let lastkey;
let direccion = 2;

function tecla(event) {
    let key = event.key;
    if (key === "ArrowRight") {
        derecha();
    }
    else if (key === "ArrowLeft") {
        izquierda();
    }
    else if (key === "ArrowUp") {
        arriba();
    }
    else if (key === "ArrowDown") {
        abajo();
    }
    else if (key === "Enter" || key === " ") {
        enter();
    }
    lastkey = key;
}

document.addEventListener("keydown", tecla);

function comprobarMovimientPaleta(h, v) {
    let puntoBuscado = paleta.find(punto => punto.x === h && punto.y === v);
    let posicion;
    if (puntoBuscado === undefined) {
        posicion = 1;
    }
    else {
        posicion = puntoBuscado.pos;
    }

    console.log(posicion);
    console.log(puntoBuscado);
    console.log(lastkey);

    return posicion;
}

function comprobarAccionPaleta(h, v) {
    let puntoBuscado = paleta.find(punto => punto.x === h && punto.y === v);
    let accion;
    if (puntoBuscado === undefined) {
        accion = [0, null];
    }
    else {
        accion = [puntoBuscado.act, puntoBuscado.evento];
    }

    console.log(accion);
    console.log(puntoBuscado);
    console.log(lastkey);

    return accion;
}

function derecha() {
    let validar = comprobarMovimientPaleta((x + 8), y);
    if (validar == 0) {
        x = x + (8);
    }

    i++;
    direccion = 2;
    personaje.style.backgroundPositionY = (alto * direccion) + 'px';
    personaje.style.backgroundPositionX = (ancho * i) + 'px';

    personaje.style.left = x + 'px';
    console.log(x + ', ' + y);
}

function izquierda() {
    let validar = comprobarMovimientPaleta((x - 8), y);
    if (validar == 0) {
        x = x - (8);
    }
    i--;
    direccion = 3
    personaje.style.backgroundPositionY = (alto * direccion) + 'px';
    personaje.style.backgroundPositionX = (ancho * i) + 'px';

    personaje.style.left = x + 'px';
    console.log(x + ', ' + y);
}

function arriba() {
    let validar = comprobarMovimientPaleta(x, (y - 8));
    if (validar == 0) {
        y = y - (8);
    }

    z--;
    direccion = 1;
    personaje.style.backgroundPositionY = (alto * direccion) + 'px';
    personaje.style.backgroundPositionX = (ancho * z) + 'px';

    personaje.style.top = y + 'px';
    console.log(x + ', ' + y);
}
function abajo() {

    let validar = comprobarMovimientPaleta(x, (y + 8));
    if (validar == 0) {
        y = y + (8);
    }
    z++;
    direccion = 4;
    personaje.style.backgroundPositionY = (alto * direccion) + 'px';
    personaje.style.backgroundPositionX = (ancho * z) + 'px';

    personaje.style.top = y + 'px';
    console.log(x + ', ' + y);
}

function enter() {

    // switch (posicion) {
    //     case 1:

    //         break;
    //     case 2:

    //         break;
    //     case 3:

    //         break;
    //     case 4:

    //         break;
    //     default:

    // }
    let validar = comprobarAccionPaleta(x, y);
    if (validar[0] == 1) {
        // document.getElementById("fondo2").style.animationPlayState = "running";
        setTimeout(function () {
            // window.location.href = validar[1];
            document.querySelector(".box").style.display = "block";
            escribirEnPantalla(validar[1][0]);
            let intervalo = setTimeout(function () {
                escribirEnPantalla(validar[1][1]);
            }, 10000);
            let intervalo2 = setTimeout(function () {
                escribirEnPantalla(validar[1][2]);
            }, 20000);
            let intervalo3 = setTimeout(function () {
                escribirEnPantalla(validar[1][3]);
            }, 30000);
            let intervalo4 = setTimeout(function () {
                document.querySelector(".box").style.display = "none";
            }, 35000);
        }, 500);
    }


}


function escribirEnPantalla(texto) {
    let arr = texto;

    arr = arr.split("");
    i = 0;
    document.getElementById("text").innerHTML = "";

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