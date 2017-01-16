import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import Splash from './components/Splash/Splash';
import BinarySearchWrap from './components/BinarySearch/BinarySearch';
import BogoSortWrap from './components/BogoSort/BogoSort';
import BubbleSortWrap from './components/BubbleSort/BubbleSort';
import QuickSortWrap from './components/QuickSort/QuickSort';

export default(
    <Route path='/' component={App} >
        <IndexRoute component={Splash} />
        <Route path="/binarysearch" component={BinarySearchWrap} />
        <Route path="/bubblesort" component={BubbleSortWrap} />
        <Route path="/quicksort" component={QuickSortWrap} />
        <Route path="/bogosort" component={BogoSortWrap} />
    </Route>
)
