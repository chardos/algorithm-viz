export function hasDiamondReachedEdge(size, widthMod, ctx){
    return(
        size > ctx.canvas.height &&
        size * widthMod > ctx.canvas.width
        // size > ctx.canvas.height/6 &&
        // size * widthMod > ctx.canvas.width/6
    )
}

export function drawDiamond(size, lineWidth, widthMod, ctx){
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const top = centerY - size;
    const left = centerX - size * widthMod;
    const right = centerX + size * widthMod;
    const bottom = centerY + size;

    ctx.lineWidth = lineWidth;
    ctx.moveTo(centerX, top);
    ctx.lineTo(right, centerY);
    ctx.lineTo(centerX, bottom);
    ctx.lineTo(left, centerY);
    ctx.fillStyle = '#ff5c40';
    ctx.closePath()
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-in';
    ctx.fill();
}
