import React, { Component } from 'react';
import quickSortGenerator from './algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import Bar from '../Common/Bar/Bar';
import classNames from 'classnames';
import './QuickSort.scss';

export default class QuickSortWrap extends Component {
    constructor(){
        super();
        selected: null,
        this.state = {
            array: [8,6,3,5,7,9,4],
            pivotIndex: null,
            selected: [],
            swapped: [],
            displayComponent: SingleNode
        }
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
        const action = this.generator.next().value;

        if (action.type === 'SET_POINTERS'){
            this.setState({
                selected: action.payload.selected,
                pivotIndex: action.payload.pivotIndex
            })
        }
        if (action.type === 'ANIMATE_SWAP'){
            this.setState({swapped: action.payload.swapped})
            setTimeout(() => {
                this.setState({
                    swapped: [],
                    array: action.payload.items
                })
            }, 300)
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
            <div className="quick-sort">
                <div className="quick-sort__wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        const classes = classNames(
                            { selected: this.state.selected.includes(i) },
                            { 'secondary-selected': this.state.pivotIndex === i}
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
                                position={position}
                            >
                                {number}
                            </DisplayComponent>
                        )
                    })}
                </div>

                <button className="binary-search__sort-button" onClick={this.toggleView}>Toggle view</button>
                <button className="binary-search__sort-button" onClick={this.next}>Next</button>
            </div>
        );
    }
}