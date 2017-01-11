import React, { Component } from 'react';
import './Centralise.scss';

/**
 * A component that will take content, calculate its height, then center it
 * vertically on the screen. Used this to replace flexbox because flexbox wasn't
 * playing nicely with react-router-transition
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
