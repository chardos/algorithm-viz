import { Component } from 'react';
import { randomizeArray, range } from '../../../utils';
import SingleNode from '../SingleNode/SingleNode';
import Bar from '../Bar/Bar';

export default class Wrapper extends Component {
    constructor(){
        super();
    }

    reset = () => {
        this.setState({
            swapped: [],
            selected: [],
            pivotIndex: null
        })
    }

    randomize = () => {
        this.reset();
        this.setState(
            { array: randomizeArray(range(1,8)) },
            () => this.resetGenerator()
        );
    }

    toggleView = () => {
        if(this.state.displayComponent === Bar){
            this.setState({displayComponent: SingleNode})
        } else {
            this.setState({displayComponent: Bar})
        }
    }
};
