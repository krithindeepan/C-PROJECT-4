canvas - 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginpath();
ctx.strokestyle = "red";
ctx.lineWidth - 1;
ctx.rect(150, 143, 430, 200);
ctx.strokestyle();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40 ,0 , 2 * Math.PI);
ctx.strokestyle();