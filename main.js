function enter(event) {
    let key = event.key;
    if (key==="Enter"){
        setTimeout(function () {
            window.location.href = "/html/profesor.html";
        }, 1000);
    } 
}
document.addEventListener("keydown", enter);
