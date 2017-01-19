var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var canvas = document.querySelector('#Canvas1');
console.log(canvas);
// canvas.width  = windowWidth;
// canvas.height = windowHeight;
var ctx = canvas.getContext('2d');

function drawDiamond(size, ctx){
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;

    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX-50,centerY-50);
    ctx.stroke();
}

ctx.beginPath();
drawDiamond(5, ctx);
console.log(ctx);
console.log(ctx.canvas.width);
