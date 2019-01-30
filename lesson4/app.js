console.log("Test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var img = new Image();
img.src = 'puppy.png';

img.onload = function(){
    ctx.drawImage(img, 50, 50, 100,100);
}

ctx.font = " 30px Comic Sans MS";
ctx.fillStyle = "blue";
ctx.strokeStyle = "green";
ctx.fillText("Hello World", 10, 50)
ctx.strokeText("My Canvas", 10, 200)
