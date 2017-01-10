import React, { Component } from 'react';
import './Centralise.scss';

class Centralise extends Component {
    constructor() {
        super();
        this.state = {
            top: 0,
            left: 0
        }
    }
    componentDidMount() {
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
