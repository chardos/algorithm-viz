import React, { Component } from 'react';
import './DiamondCanvas.scss';
import {hasDiamondReachedEdge, drawDiamond} from './helpers';

/**
 * A component that places a canvas element as a background with a diamond
 * animating outward.
 */

class DiamondCanvas extends Component {
    constructor() {
        super();
        this.state = {
            currentSize: 100
        };
        this.widthMod = 0.722;
        this.ctx = null;
    }

    componentDidMount(){
        this.setCanvasSize();
        this.ctx = this.refs.canvas.getContext('2d');
        this.step(100, 60, this.widthMod, this.ctx);
        //set context here
    }


    step(size, lineWidth, widthMod, ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        drawDiamond(size, lineWidth, widthMod, ctx);

        if(hasDiamondReachedEdge(size, widthMod, ctx)){
            requestAnimationFrame( () => { this.step(0, lineWidth, widthMod, ctx)} )
        }
        else {
            requestAnimationFrame( () => { this.step(size + 1, lineWidth, widthMod, ctx)} )
        }
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
