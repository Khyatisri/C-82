canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
radius=document.getElementById("radius").value;
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="down";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouseEvent="up";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouseEvent="leave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
console.log(e);
var current_mousex=e.clientX-canvas.offsetLeft;
var current_mousey=e.clientY-canvas.offsetTop;
if (mouseEvent=="down") {
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(current_mousex,current_mousey,radius,0,2*Math.PI);
ctx.stroke();
}
}
function Cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


