import React, { Component } from 'react';
import Header from './components/Common/Header/Header';
import BackIcon from './components/Svg/BackIcon/BackIcon';
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="border-wrap">
                <BackIcon />
                <Header />
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default App;
