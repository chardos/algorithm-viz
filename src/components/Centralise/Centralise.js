import React, { Component } from 'react';
import './Centralise.scss';

/**
 * A component that will take content, calculate its height, then center it
 * vertically on the screen. Content was previously centered using position absolute
 * and translates, but this was causing jump animation from having translates
 * within a translated element.
 */

class Centralise extends Component {
    constructor() {
        super();
        this.state = {
            top: 0,
            left: 0
        }
    }

    positionElementCenter = () => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const elem = this.refs.centralise;
        const elemHeight = elem.offsetHeight;
        const elemWidth = elem.offsetWidth;
        this.setState({
            top: (windowHeight - elemHeight) / 2,
            left: (windowWidth - elemWidth) / 2
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.positionElementCenter)
    }
    componentDidMount() {
        this.positionElementCenter();
        window.addEventListener('resize', this.positionElementCenter)

    }

    render() {

        return (
            <div className="centralise" ref="centralise"
                style={{
                    top: this.state.top,
                    left: this.state.left
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Centralise;
