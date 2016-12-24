import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="header">
                <Link to="/binarysearch" className="header__link">Bubble sort</Link>
                <Link to="/bubblesort" className="header__link">Bubble sort</Link>
            </div>
            {this.props.children}

        </div>
    );
  }
}

export default App;
