// @flow

import React from 'react';
import { SET_POINTERS, SWAP } from './constants';
import { randomizeArray, range } from '../../utils';
import SortWrapper from '../Common/SortWrapper/SortWrapper';
import quickSortGenerator from './algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import Bar from '../Common/Bar/Bar';
import classNames from 'classnames';
import './QuickSort.scss';

export default class QuickSortWrap extends SortWrapper {
    constructor(){
        super();
        selected: null,
        this.state = {
            array: randomizeArray(range(1,8)),
            pivotIndex: null,
            selected: [],
            swapped: [],
            displayComponent: SingleNode,
            done: false
        }
        this.generator = quickSortGenerator(this.state.array);
    }

    resetGenerator = () => {
        this.generator = quickSortGenerator(this.state.array);
    }

    toggleView = () => {
        if(this.state.displayComponent === Bar){
            this.setState({displayComponent: SingleNode})
        } else {
            this.setState({displayComponent: Bar})
        }
    }

    next = () => {
        const next = this.generator.next();
        const action = next.value;
        const isDone = next.done === true;

        if (isDone) {
            this.setState({
                done: true,
                selected: []
            });
            return;
        };

        if (action.type === SET_POINTERS){
            this.setState({
                selected: action.payload.selected,
                pivotIndex: action.payload.pivotIndex
            })
        }
        if (action.type === SWAP){
            this.setState({swapped: action.payload.swapped})
            setTimeout(() => {
                this.setState({
                    swapped: [],
                    array: action.payload.items
                })
            }, 300)
        }
    }

    render() {
        var style = {
            width: this.state.array.length * 60 - 10
        }
        return (
            <div className="quick-sort">
                <h1 className="quick-sort__heading  ">Quick sort</h1>
                <div className="quick-sort__wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        const classes = classNames(
                            { selected: this.state.selected.includes(i) },
                            { 'secondary-selected': this.state.pivotIndex === i},
                            { done: this.state.done }
                        )
                        let modifiedPosition;
                        if (this.state.swapped[0] === i){
                            modifiedPosition = this.state.swapped[1] * 60;
                        }
                        if (this.state.swapped[1] === i){
                            modifiedPosition = this.state.swapped[0] * 60;
                        }
                        const normalPosition = i * 60
                        const position = modifiedPosition !== undefined ? modifiedPosition : normalPosition;
                        var DisplayComponent = this.state.displayComponent;
                        return(
                            <DisplayComponent
                                classes={classes}
                                key={number}
                                value={number}
                                position={position}
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
