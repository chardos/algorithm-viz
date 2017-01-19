//TODO: if diamond is smaller than width, use fill instead.

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var canvas = document.querySelector('#Canvas1');
console.log(canvas);
// canvas.width  = windowWidth;
// canvas.height = windowHeight;
var ctx = canvas.getContext('2d');
const widthMod = 0.722;

function drawDiamond(size, lineWidth, ctx){
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const top = centerY - size;
    const left = centerX - size * 0.722;
    const right = centerX + size * 0.722;
    const bottom = centerY + size;

    ctx.moveTo(centerX, top);
    ctx.lineTo(right, centerY);
    ctx.lineTo(centerX, bottom);
    ctx.lineTo(left, centerY);
    ctx.closePath()
    if(size < lineWidth){
        ctx.fill();
    }
    else {
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
}

function hasDiamondReachedEdge(size, ctx){
    if(
        // size > ctx.canvas.height &&
        // size * widthMod > ctx.canvas.width
        size > ctx.canvas.height/6 &&
        size * widthMod > ctx.canvas.width/6
    ){
        return true;
    }
    return false;
}

function step(size, ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
        drawDiamond(size, 60, ctx);

    // if(hasDiamondReachedEdge(size, ctx)){
    //     requestAnimationFrame( () => { step(0, ctx)} )
    // }
    // else {
    //     requestAnimationFrame( () => { step(size + 2, ctx)} )
    // }
}
step(60, ctx);
