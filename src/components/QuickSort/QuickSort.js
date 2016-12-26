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
        console.log(action.type);
        console.log(action.payload);
        if (action.type === 'SET_POINTERS'){
            this.setState({selected: action.payload})
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
                            {
                                selected: this.state.selected.includes(i)
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

                <button className="binary-search__sort-button" onClick={this.toggleView}>Toggle view</button>
                <button className="binary-search__sort-button" onClick={this.next}>Next</button>
            </div>
        );
    }
}
