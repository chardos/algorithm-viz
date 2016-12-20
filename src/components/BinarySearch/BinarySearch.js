import React, { Component } from 'react';
import binarySearch from './algorithm';
import BinarySearchBox from './BinarySearchBox';
import './BinarySearch.scss';

class BinarySearchWrap extends Component {
    constructor(){
        super();
        this.state = {
            array: [2, 5, 8, 12 ,15,45, 75, 77, 88],
            faded: [2, 5],
            highlighted: 3
        }
    }

    start = () => {
        console.log(this.state.array);
        // this.setState({
        //     array: binarySearch(this.state.array)
        // })
    }
    render() {
        var style = {
            width: this.state.array.length * 60 - 10
        }
        return (
            <div className="binary-search">
                <div className="binary-search-wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        return(
                            <BinarySearchBox
                                key={number}
                                position={i * 60}
                            >
                                {number}
                            </BinarySearchBox>
                        )
                    })}
                </div>

                <button className="binary-search__sort-button" onClick={this.start}>Start</button>
            </div>
        );
    }
}

export default BinarySearchWrap;
