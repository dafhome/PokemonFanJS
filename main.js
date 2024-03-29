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
    let validar = comprobarAccionPaleta (x,y);
    if (validar[0] == 1 ){
        document.getElementById("fondo2").style.animationPlayState = "running";
        setTimeout(function(){
            window.location.href = validar[1];

        },2000);
    }
  

}