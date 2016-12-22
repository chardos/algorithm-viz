import React, { Component } from 'react';
import BinarySearchWrap from './components/BinarySearch/BinarySearch';
import BubbleSortWrap from './components/BubbleSort/BubbleSort';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<BinarySearchWrap />*/}
          {<BubbleSortWrap />}
      </div>
    );
  }
}

export default App;
