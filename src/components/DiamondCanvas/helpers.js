import {LIGHT_DIAMOND_COLOR, DARK_DIAMOND_COLOR, LINE_WIDTH, X_WIDTH_MOD} from './constants';

export function createDiamonds(num){
    let diamonds = [];
    for(var i=num; i>0; i--){
        const color = i % 2 ? DARK_DIAMOND_COLOR : LIGHT_DIAMOND_COLOR;
        const size = i * LINE_WIDTH;
        diamonds.push({ color, size });
    }
    return diamonds;
}

export function incrementDiamonds(diamonds, speed){
    return diamonds.map(diamond => ({
        ...diamond,
        size: diamond.size + speed
    }));
}

export function reorderDiamondsIfNeeded(diamonds){
    let needsReorder = false;
    const [firstDiamond, ...otherDiamonds] = diamonds;
    if(firstDiamond.size >= diamonds.length * LINE_WIDTH){
        firstDiamond.size = 0;
        needsReorder = true;
    }
    if (needsReorder) {
        return [...otherDiamonds, firstDiamond];
    }
    return diamonds;
}

export function drawDiamond(diamond, ctx){
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const top = centerY - diamond.size;
    const left = centerX - diamond.size * diamond.widthMod;
    const right = centerX + diamond.size * diamond.widthMod;
    const bottom = centerY + diamond.size;

    ctx.lineWidth = diamond.lineWidth;
    ctx.beginPath()
    ctx.moveTo(centerX, top);
    ctx.lineTo(right, centerY);
    ctx.lineTo(centerX, bottom);
    ctx.lineTo(left, centerY);
    ctx.fillStyle = diamond.color;
    ctx.closePath()
    ctx.fill();
}
