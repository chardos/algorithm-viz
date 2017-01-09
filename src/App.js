import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';
import { Link, browserHistory } from 'react-router';
import Header from './components/Common/Header/Header';
import Icon from './components/Icon/Icon';
import CornerNumber from './components/Common/CornerNumber/CornerNumber';
import './App.scss';

class App extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
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
        if (e.keyCode === 27) {
            browserHistory.push('/')
        }
    }

    render() {
        return (
            <div className="App" onKeyPress={this.handleKeyDown}>
                <div className="border-wrap">
                    <CornerNumber number="0101" />
                    {/*<div className="diamond-holder">
                        <Icon name="diamond" width="100%" height="100%"/>
                    </div>*/}
                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                    >
                        {this.renderBackArrow()}
                        {this.props.children}
                    </RouteTransition>
                </div>
            </div>
        );
    }
}

export default App;
