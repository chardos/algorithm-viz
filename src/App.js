import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './components/Common/Header/Header';
import Icon from './components/Icon/Icon';
import './App.scss';

class App extends Component {
  renderBackArrow(){
      const isNotSplashPage = window.location.pathname !== '/';
      return isNotSplashPage && (
          <Link to="/" className="back-arrow">
              <Icon name="back-arrow" width="40" height="40" />
          </Link>
      )
  }

  render() {
    return (
        <div className="App">
            <div className="border-wrap">
                {this.renderBackArrow()}
                <Header />
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default App;
