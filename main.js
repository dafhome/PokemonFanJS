let personaje = document.getElementById("personaje")
let personaje2 = document.getElementById("personaje2")

let i = 0;
let i2 = 0;

let animarPersonaje = function () {
    setInterval(function () {
        personaje.style.backgroundPositionX = (64 * i) + 'px';
        personaje.style.left = (16 * i) + 'px';

        i++;
    }, 100);
}

// let animarPersonaje2 = function (){
//     setInterval(function(){
//         personaje2.style.backgroundPositionX = (64 * i2) +'px';
//         personaje2.style.top = (8*i2)+'px';
//         i2++;
//     },300);
// }

animarPersonaje();
// animarPersonaje2();

// function down =
