console.log("Test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(50,50);
ctx.lineTo(250,250);
ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.strokeStyle = "rgb(50,255,50)";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "cyan";
ctx.fillRect(100, 100, 100, 100);

ctx.strokeStyle = "navy";
ctx.strokeRect(50,50,200,200);

ctx.clearRect(125,125,50,50);

var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");


