console.log("Test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.arc(150,150,100,0,6.28);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(10,150);
ctx.lineTo(290,150);
ctx.closePath();
ctx.strokeStyle = "green";
ctx.stroke();
ctx.fillStyle = "lightgreen"
ctx.fill();
