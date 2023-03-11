canvas = document.getElementById("miCanvas");
ctx = canvas.getContext("2d");
color = "#D95EF8"
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var current_position_of_x,current_position_of_y;


canvas.addEventListener("mousedown", mi_mouseAbajo);


function mi_mouseAbajo(e) {
    color = document.getElementById("color").value;
    g = document.getElementById("gruesor").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    dibujaCirculo(mouse_x, mouse_y);
    console.log(mouse_x, mouse_y)
    mouseEvent = "mousedown";
}


function dibujaCirculo() {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = g;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
function limpiarArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}