import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import routes from './routes';
import './index.scss';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);
