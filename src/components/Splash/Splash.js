import React, { Component } from 'react';
import CornerNumber from '../Common/CornerNumber/CornerNumber';
import classNames from 'classnames';
import './Splash.scss';

export default class Splash extends Component {
    constructor(){
        super();
    }

    render() {

        return (
            <div className="splash__text-wrap">
                <CornerNumber number="0101" />
                <h1 className="splash__header">The Algorithm Visualizer</h1>
                <div className="links__wrap">
                    <div className="links__column">
                        <div className="links__header">Search</div>
                        <div className="links__border"></div>
                        <div className="links__single">01 Binary search</div>
                    </div>

                    <div className="links__column">
                        <div className="links__header">Sort</div>
                        <div className="links__border"></div>
                        <div className="links__single">01 Bubble sort</div>
                        <div className="links__single">02 Quick sort</div>
                        <div className="links__single">03 Bogo sort</div>
                    </div>

                    <div className="links__column">
                        <div className="links__header">Shuffle</div>
                        <div className="links__border"></div>
                        <div className="links__single">01 Fisher-Yates</div>
                    </div>
                </div>
            </div>
        );
    }
}
