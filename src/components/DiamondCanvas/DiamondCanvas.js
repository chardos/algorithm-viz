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
        this.animate();
        //set context here
    }


    animate() {
        drawDiamond(100, 60, this.widthMod, this.ctx);
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
