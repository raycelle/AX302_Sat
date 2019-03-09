console.log("Test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var WIDTH = 600;
var HEIGHT = 600;

//position and size of player
var x, y, s;
//player movement
var mx, my;

var score = 0;

//position, size of circle
var circleX, circleY, circleS;
circleCollision = false;


//import images
function drawPacman(){
    var pacman = new Image();
    pacman.src = "pacman.png";
    ctx.drawImage(pacman, x, y, s, s);
}

function drawCircle(){
    var circle = new Image();
    circle.src = "circle.png";
    ctx.drawImage(circle, circleX, circleY, circleS, circleS);
}

function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//initialize game
function init(){
    x = 300;
    y = 300;
    s = 50;
    mx = 0;
    my = 0;

    circleS = 50;
    circleX = Math.floor(Math.random() * (WIDTH - circleS) );
    circleY = Math.floor(Math.random() * (HEIGHT - circleS) );

    window.onkeydown = keydownControl;

    return setInterval(draw, 10);
}

function keydownControl(e){
    if(e.keyCode == 37){
        mx = -4;
        my = 0;
    }
    if(e.keyCode == 38){
        mx = 0;
        my = -4;
    }
    if(e.keyCode == 39){
        mx = 4;
        my = 0;
    }
    if(e.keyCode == 40){
        mx = 0;
        my = 4;
    }
}

function draw(){
    clear();
    drawPacman();
    drawCircle();

    x += mx;
    y += my;

    if(x > WIDTH - s || x < 0){
        mx = -mx
    }
    if(y > HEIGHT - s || y < 0){
        my = -my
    }

    collisionCheck();
    collisionHandle();
}

function collisionCheck(){
    if( (x + s >= circleX) && (x <= circleX + circleS) &&
        (y + s >= circleY) && (y <= circleY + circleS) ) {

        circleCollision = true;
    } else {
        circleCollision = false;
    }
}

function collisionHandle(){
    if(circleCollision){
        circleX = Math.floor(Math.random() * (WIDTH - circleS) );
        circleY = Math.floor(Math.random() * (HEIGHT - circleS) );
        score += 1;
        document.getElementById("score").innerHTML = score;
    }
}


init()

