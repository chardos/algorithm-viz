import React, { Component } from 'react';
import bubbleSortGenerator from './algorithm';
import './BubbleSort.scss';

export default class BubbleSortWrap extends Component {
    constructor(){
        super();
        this.state = {
            array: [2, 5, 8, 12 ,15, 45, 75, 77, 88],
        }
        // this.generator = binarySearchGenerator(this.state.array, this.state.searchedValue);
    }

    next = () => {
        const action = this.generator.next().value;
        console.log(action.type);
        console.log(action.value);
        if (action.type === 'select'){
            this.setState({selected: action.value})
        }
        if (action.type === 'not_found'){
            this.setState({
                notFound: action.value,
                selected: null
            })
        }
        if (action.type === 'found'){
            this.setState({
                found: action.value,
                selected: null
            })
        }
        if (action.type === 'update_active'){
            this.setState({
                active: action.value,
                notFound: null
            })
        }
    }

    render() {
        var style = {
            width: this.state.array.length * 60 - 10
        }
        return (
            <div className="binary-search">
                <div className="binary-search__searched-value">{this.state.searchedValue || 'Choose'}</div>
                <div className="binary-search-wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        return(
                            <div></div>
                        )
                    })}
                </div>
                {
                    this.state.chosen &&
                    <button className="binary-search__sort-button" onClick={this.next}>Next</button>
                }

            </div>
        );
    }
}
