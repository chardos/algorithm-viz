import React, { Component } from 'react';
import binarySearch from './algorithm';
import BinarySearchBox from './BinarySearchBox';
import './BinarySearch.scss';

class BinarySearchWrap extends Component {
    constructor(){
        super();
        this.state = {
            array: [2,5,8,12,15,45,75,77,88]
        }
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
            </div>
        );
    }
}

export default BinarySearchWrap;
