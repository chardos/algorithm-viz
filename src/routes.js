import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import BinarySearchWrap from './components/BinarySearch/BinarySearch';
import BubbleSortWrap from './components/BubbleSort/BubbleSort';

export default(
    <Route path='/' component={App} >
        <IndexRoute component={BinarySearchWrap} />
        <Route path="/binarysearch" component={BinarySearchWrap} />
        <Route path="/bubblesort" component={BubbleSortWrap} />
    </Route>
)