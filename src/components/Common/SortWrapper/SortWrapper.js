import { Component } from 'react';
import { randomizeArray, range } from '../../../utils';
// import bubbleSortGenerator from '../../BubbleSort/Bubblesort/algorithm';

export default class Wrapper extends Component {
    constructor(){
        super();
    }

    reset = () => {
        this.setState({
            swapped: [],
            selected: -100
        })
    }

    randomize = () => {
        console.log(this);
        this.reset();
        this.setState(
            { array: randomizeArray(range(1,8)) },
            () => this.resetGenerator()
        );
    }
};
