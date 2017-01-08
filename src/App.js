import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import Header from './components/Common/Header/Header';
import Icon from './components/Icon/Icon';
import './App.scss';

class App extends Component {
    componentDidMount() {
        console.log('ASDF');
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
                    {this.renderBackArrow()}
                    <Header/> {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
