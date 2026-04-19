let index = 0;

function ir(n){
    index = n;
    document.querySelector(".contenedor").style.transform =
        "translateX(-" + (n * 100) + "vw)";
}

function mensaje(){
    alert("¡Bienvenido a Querétaro!");
}
