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
    const left = centerX - size * widthMod;
    const right = centerX + size * widthMod;
    const bottom = centerY + size;

    ctx.lineWidth = lineWidth;
    ctx.fillColor='red';
    ctx.moveTo(centerX, top);
    ctx.lineTo(right, centerY);
    ctx.lineTo(centerX, bottom);
    ctx.lineTo(left, centerY);
    ctx.closePath()
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-in';
    ctx.fill();
}

function hasDiamondReachedEdge(size, ctx){
    return(
        // size > ctx.canvas.height &&
        // size * widthMod > ctx.canvas.width
        size > ctx.canvas.height/6 &&
        size * widthMod > ctx.canvas.width/6
    )
}

function step(size, lineWidth, ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    drawDiamond(size, lineWidth, ctx);

    if(hasDiamondReachedEdge(size, ctx)){
        requestAnimationFrame( () => { step(0, lineWidth, ctx)} )
    }
    else {
        console.log('hey');
        requestAnimationFrame( () => { step(size + 1, lineWidth, ctx)} )
    }
}
console.log(ctx);
step(0, 60, ctx);
