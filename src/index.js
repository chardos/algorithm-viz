import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import BinarySearchWrap from './components/BinarySearch/BinarySearch';
import BubbleSortWrap from './components/BubbleSort/BubbleSort';
import routes from './routes';
import './index.scss';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);
