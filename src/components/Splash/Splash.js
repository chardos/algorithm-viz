import React, { Component } from 'react';
import classNames from 'classnames';
import './Splash.scss';

export default class Splash extends Component {
    constructor(){
        super();
    }

    render() {

        return (
            <div className="splash__wrap">
                <div className="splash__text-wrap">
                    <h1>The Algorithm Visualizer</h1>
                    <p>test</p>
                </div>
            </div>
        );
    }
}
