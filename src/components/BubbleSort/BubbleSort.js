import React, { Component } from 'react';
import bubbleSortGenerator from './algorithm';
import SingleNode from '../Common/SingleNode/SingleNode';
import classNames from 'classnames';
import './BubbleSort.scss';

export default class BubbleSortWrap extends Component {
    constructor(){
        super();
        selected: null,
        this.state = {
            array: [8,6,3,5,7,9,4],
        }
        this.generator = bubbleSortGenerator(this.state.array);
    }

    next = () => {
        const action = this.generator.next().value;
        console.log(action.type);
        console.log(action.value);
        if (action.type === 'select'){
            this.setState({selected: action.value})
        }
        if (action.type === 'update_list'){
            this.setState({
                array: action.value
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

                        return(
                            <SingleNode
                                classes={classes}
                                key={number}
                                position={i * 60}
                            >
                                {number}
                            </SingleNode>
                        )
                    })}
                </div>

                <button className="binary-search__sort-button" onClick={this.next}>Next</button>
            </div>
        );
    }
}
