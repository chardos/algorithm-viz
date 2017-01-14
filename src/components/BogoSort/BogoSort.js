// import { ANIMATE_SWAP, UPDATE_LIST, SELECT } from './constants';
import React, { Component } from 'react';
import { randomizeArray, range } from '../../utils';
import bogoSortGenerator from './bogo-algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import SortWrapper from '../Common/SortWrapper/SortWrapper';
import classNames from 'classnames';
// import './BubbleSort.scss';

export default class BogoSortWrap extends SortWrapper {
    constructor(){
        super();
        this.state = {
            array: randomizeArray(range(1,8)),
            displayComponent: SingleNode,
            done: false
        }
        this.generator = bogoSortGenerator(this.state.array);
    }

    resetGenerator = () => {
        this.generator = bogoSortGenerator(this.state.array)
    }

    next = () => {
        console.log('next');
        const next = this.generator.next();
        const action = next.value;
        const isDone = next.done === true;

        if (isDone){
            this.setState({done: true})
            return;
        };

        if (action.type === 'UPDATE_LIST'){
            this.setState({
                array: action.payload
            })
        }
    }

    render() {
        var style = {
            width: this.state.array.length * 65 - 10
        }
        return (
            <div className="bubble-sort">
                <h1 className="bubble-sort-heading">Bogo sort</h1>
                <div className="bubble-sort__wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        const classes = classNames(
                            {
                                selected: this.state.selected === i ||
                                          this.state.selected + 1 === i
                            },
                            { done: this.state.done }
                        )
                        var DisplayComponent = this.state.displayComponent;
                        return(
                            <DisplayComponent
                                classes={classes}
                                value={number}
                                key={number}
                                position={i * 65}
                            >
                                {number}
                            </DisplayComponent>
                        )
                    })}
                </div>

                <span className="minilink" onClick={this.randomize}>Randomize</span>
                <span className="minilink" onClick={this.toggleView}>Toggle view</span>
                <span className="minilink" onClick={this.next}>Next</span>
            </div>
        );
    }
}
