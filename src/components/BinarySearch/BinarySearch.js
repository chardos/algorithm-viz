import SingleNode from '../Common/SingleNode/SingleNode';
import binarySearchGenerator from './algorithm';
import React, { Component } from 'react';
import classNames from 'classnames';
import './BinarySearch.scss';
import {
    UPDATE_ACTIVE,
    NOT_FOUND,
    SELECT,
    FOUND
} from './constants';

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

        if (action.type === SELECT){
            this.setState({selected: action.payload})
        }
        if (action.type === NOT_FOUND){
            this.setState({
                notFound: action.payload,
                selected: null
            })
        }
        if (action.type === FOUND){
            this.setState({
                found: action.payload,
                selected: null
            })
        }
        if (action.type === UPDATE_ACTIVE){
            this.setState({
                active: action.payload,
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
                <h1 className="binary-search__heading">Binary search</h1>
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
                    <span className="minilink" onClick={this.next}>Next</span>
                }

            </div>
        );
    }
}

export default BinarySearchWrap;
