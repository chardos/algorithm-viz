import { RouteTransition } from 'react-router-transition';
import { Link, browserHistory } from 'react-router';
import React, { Component } from 'react';
import classNames from 'classnames';
import CornerNumber from './components/Common/CornerNumber/CornerNumber';
import Header from './components/Common/Header/Header';
import Centralise from './components/Centralise/Centralise';
import DiamondCanvas from './components/DiamondCanvas/DiamondCanvas';
import Icon from './components/Icon/Icon';
import { isEscapeKey } from './utils';
import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        setTimeout(() => {
            this.setState({loaded: true})
        }, 150)
    }

    renderBackArrow() {
        const isNotSplashPage = window.location.pathname !== '/';
        return isNotSplashPage && (
            <Link to="/" className="back-arrow">
                <Icon name="back-arrow" width="50" height="50"/>
            </Link>
        )
    }

    handleKeyDown(e) {
        isEscapeKey(e.keyCode) && browserHistory.push('/')
    }

    render() {
        const appClass = classNames('App', {'loaded': this.state.loaded});

        return (
            <div className={appClass} onKeyPress={this.handleKeyDown}>
                <DiamondCanvas size={0} lineWidth={170} />
                <DiamondCanvas size={300} lineWidth={170} />
                <DiamondCanvas size={600} lineWidth={170} />
                <DiamondCanvas size={900} lineWidth={170} />
                <DiamondCanvas size={1200} lineWidth={170} />
                <DiamondCanvas size={1500} lineWidth={170} />
                <DiamondCanvas size={1800} lineWidth={170} />
                <DiamondCanvas size={1200} lineWidth={170} />
                <div className="border-wrap">
                    <CornerNumber />
                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                    >
                        {this.renderBackArrow()}
                        <Centralise>
                            {this.props.children}
                        </Centralise>
                    </RouteTransition>
                </div>
            </div>
        );
    }
}

export default App;
