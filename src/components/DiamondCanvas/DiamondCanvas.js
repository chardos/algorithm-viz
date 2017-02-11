import React, { Component } from 'react';
import './DiamondCanvas.scss';
import {
    LIGHT_DIAMOND_COLOR,
    DARK_DIAMOND_COLOR,
    LINE_WIDTH,
    X_WIDTH_MOD,
    SPEED
} from './constants';
import {createDiamonds, reorderDiamondsIfNeeded, incrementDiamonds, drawDiamond} from './helpers';

/**
 * A component that places a canvas element as a background with a diamond
 * animating outward.
 */

class DiamondCanvas extends Component {
    constructor() {
        super();
        this.state = {
            diamonds: createDiamonds(14)
        };
        console.log(this.state.diamonds);
        this.ctx = null;
    }

    componentDidMount(){
        this.setCanvasSize();
        this.ctx = this.refs.canvas.getContext('2d');
        this.step(this.ctx);
    }


    step(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();

        // Draw the diamonds
        this.state.diamonds.forEach(diamond => {
            drawDiamond({
                size: diamond.size,
                lineWidth: LINE_WIDTH,
                widthMod: X_WIDTH_MOD,
                color: diamond.color
            }, ctx);
        })

        // increment by each diamonds size
        const reorderedDiamonds = reorderDiamondsIfNeeded(this.state.diamonds);
        const incrementedDiamonds = incrementDiamonds(reorderedDiamonds, SPEED);

        this.setState({diamonds: incrementedDiamonds});

        requestAnimationFrame( () => { this.step(ctx)} );
    }

    setCanvasSize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        this.refs.canvas.width = windowWidth;
        this.refs.canvas.height = windowHeight;
    }

    render() {
        return (
            <canvas className="diamond-canvas" ref="canvas">Your browser does not support canvas.</canvas>
        );
    }
}

export default DiamondCanvas;
