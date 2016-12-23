import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import BinarySearchWrap from './components/BinarySearch/BinarySearch';
import BubbleSortWrap from './components/BubbleSort/BubbleSort';
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="header">
                <a href="/binarysearch" className="header__link">Bubble sort</a>
                <a href="/bubblesort" className="header__link">Bubble sort</a>
            </div>
            <Router history={browserHistory}>
                <Route path="/" component={BinarySearchWrap} />
                <Route path="/binarysearch" component={BinarySearchWrap} />
                <Route path="/bubblesort" component={BubbleSortWrap} />
            </Router>
        </div>
    );
  }
}

export default App;
