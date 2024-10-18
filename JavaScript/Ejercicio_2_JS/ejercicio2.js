
const $rojo = document.getElementById("rojo"),
    $amarillo = document.getElementById("amarillo"),
    $verde = document.getElementById("verde"),
    $azul = document.getElementById("azul"),
    $morado = document.getElementById("morado"),
    $restablecer = document.getElementById("restablecer");
    
    
$rojo.style.backgroundColor = "red";
$amarillo.style.backgroundColor = "gold";
$verde.style.backgroundColor = "green";
$azul.style.backgroundColor = "blue";
$morado.style.backgroundColor = "purple";

const $body = document.querySelector("body")
const $contenedor = document.querySelector("main")

$rojo.addEventListener("click",(e) => {
    $body.style.background = "red"
    $contenedor.style.background = "red"
});

$amarillo.addEventListener("click",(e) => {
    $body.style.background = "gold"
    $contenedor.style.background = "gold"
});

$verde.addEventListener("click",(e) => {
    $body.style.background = "green"
    $contenedor.style.background = "green"
});

$azul.addEventListener("click",(e) => {
    $body.style.background = "blue"
    $contenedor.style.background = "blue"
});

$morado.addEventListener("click",(e) => {
    $body.style.background = "purple"
    $contenedor.style.background = "purple"
});

$restablecer.addEventListener("click",(e) => {
    $body.style.background = "none"
    $contenedor.style.background = "rgb(232, 232, 220)"
});