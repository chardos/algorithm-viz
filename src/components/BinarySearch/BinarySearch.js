import React, { Component } from 'react';
import binarySearchGenerator from './algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import classNames from 'classnames';
import './BinarySearch.scss';

class BinarySearchWrap extends Component {
    constructor(){
        super();
        this.state = {
            chosen: false,
            searchedValue: null,
            array: [2, 5, 8, 12 ,15, 45, 75, 77, 88],
            active: [0, 1, 2, 3, 4, 5, 6, 7, 8], //goes by index
            selected: null, //goes by index
            notFound: null, //goes by index
            found: null //goes by index
        }
        this.generator = null;
    }

    setSearchedValue = (searchedValue) => {
        this.setState({
            searchedValue: parseInt(searchedValue, 10),
            chosen: true
        });
        setTimeout(() => {
            this.generator = binarySearchGenerator(this.state.array, this.state.searchedValue);
        })
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

                        const classes = classNames(
                            'faded-by-default',
                            {active: this.state.active.indexOf(i) >= 0},
                            {selected: this.state.selected === i},
                            {'not-found': this.state.notFound === i},
                            {found: this.state.found === i}
                        )
                        return(
                            <SingleNode
                                classes={classes}
                                key={number}
                                position={i * 60}
                                setSearchedValue={this.setSearchedValue}
                            >
                                {number}
                            </SingleNode>
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

export default BinarySearchWrap;
