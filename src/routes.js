import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Splash from './components/Splash/Splash';
import BinarySearchWrap from './components/BinarySearch/BinarySearch';
import BubbleSortWrap from './components/BubbleSort/BubbleSort';
import QuickSortWrap from './components/QuickSort/QuickSort';

export default(
    <Route path='/' component={App} >
        <IndexRoute component={Splash} />
        <Route path="/binarysearch" component={BinarySearchWrap} number="01" />
        <Route path="/bubblesort" component={BubbleSortWrap} />
        <Route path="/quicksort" component={QuickSortWrap} />
    </Route>
)
