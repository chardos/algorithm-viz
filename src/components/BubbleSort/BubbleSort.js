import React, { Component } from 'react';
import { randomizeArray, range } from '../../utils';
import bubbleSortGenerator from './algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import SortWrapper from '../Common/SortWrapper/SortWrapper';
import Bar from '../Common/Bar/Bar';
import classNames from 'classnames';
import './BubbleSort.scss';

export default class BubbleSortWrap extends SortWrapper {
    constructor(){
        super();
        this.state = {
            selected: -100,
            array: randomizeArray(range(1,8)),
            swapped: [],
            displayComponent: SingleNode
        }
        this.generator = bubbleSortGenerator(this.state.array);
    }

    // randomize = () => {
    //     console.log(this);
    //     this.reset();
    //     this.setState(
    //         { array: randomizeArray(range(1,8)) },
    //         () => this.generator = bubbleSortGenerator(this.state.array)
    //     );
    // }
    //
    resetGenerator = () => {
        this.generator = bubbleSortGenerator(this.state.array)
    }

    toggleView = () => {
        if(this.state.displayComponent === Bar){
            this.setState({displayComponent: SingleNode})
        } else {
            this.setState({displayComponent: Bar})
        }
    }

    next = () => {
        const action = this.generator.next().value;
        console.log(action.type);
        console.log(action.value);
        if (action.type === 'select'){
            this.setState({selected: action.value})
        }
        if (action.type === 'animate_swap'){
            this.setState({
                swapped: [action.value, action.value + 1]
            })
            setTimeout(() => {
                this.next()
            },300)
        }
        if (action.type === 'update_list'){
            this.setState({
                array: action.value,
                swapped: []
            })
        }
    }

    render() {
        var style = {
            width: this.state.array.length * 60 - 10
        }
        return (
            <div className="bubble-sort">
                <div className="bubble-sort__wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        const classes = classNames(
                            {
                                selected: this.state.selected === i ||
                                          this.state.selected + 1 === i
                            },
                        )
                        const moveForwards = this.state.swapped[0] === i;
                        const moveBackwards = this.state.swapped[1] === i;
                        const animationMod = moveBackwards && -60 || moveForwards && 60;
                        var MyComponent = this.state.displayComponent;
                        return(
                            <MyComponent
                                classes={classes}
                                key={number}
                                position={i * 60 + animationMod}
                            >
                                {number}
                            </MyComponent>
                        )
                    })}
                </div>

                <button className="binary-search__sort-button" onClick={this.randomize}>Randomize</button>
                <button className="binary-search__sort-button" onClick={this.toggleView}>Toggle view</button>
                <button className="binary-search__sort-button" onClick={this.next}>Next</button>
            </div>
        );
    }
}
