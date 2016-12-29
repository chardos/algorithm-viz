import React, { Component } from 'react';
import { randomizeArray, range } from '../../utils';
import bubbleSortGenerator from './algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import SortWrapper from '../Common/SortWrapper/SortWrapper';
import classNames from 'classnames';
import './BubbleSort.scss';

export default class BubbleSortWrap extends SortWrapper {
    constructor(){
        super();
        this.state = {
            selected: -100,
            array: randomizeArray(range(1,8)),
            swapped: [],
            displayComponent: SingleNode,
            done: false
        }
        this.generator = bubbleSortGenerator(this.state.array);
    }

    resetGenerator = () => {
        this.generator = bubbleSortGenerator(this.state.array)
    }

    next = () => {
        const next = this.generator.next();
        const action = next.value;
        const isDone = next.done === true;

        if (isDone) return;

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
        if (action.type === 'DONE'){
            this.setState({done: true})
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
                            { done: this.state.done }
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
