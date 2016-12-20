import React, { Component } from 'react';
import binarySearchGenerator from './algorithm';
import BinarySearchBox from './BinarySearchBox';
import './BinarySearch.scss';

class BinarySearchWrap extends Component {
    constructor(){
        super();
        this.state = {
            searchedValue: 12,
            array: [2, 5, 8, 12 ,15, 45, 75, 77, 88],
            active: [0, 1, 2, 3, 4, 5, 6, 7, 8], //goes by index
            selected: null, //goes by index
            notFound: null, //goes by index
            found: null //goes by index
        }
        this.generator = binarySearchGenerator(this.state.array, this.state.searchedValue)
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
                <div className="binary-search-wrap" style={style}>
                    {this.state.array.map((number, i) => {
                        const active = this.state.active.indexOf(i) >= 0;
                        const selected = this.state.selected === i;
                        const notFound = this.state.notFound === i;
                        const found = this.state.found === i;
                        return(
                            <BinarySearchBox
                                active={active}
                                selected={selected}
                                notFound={notFound}
                                found={found}
                                key={number}
                                position={i * 60}
                            >
                                {number}
                            </BinarySearchBox>
                        )
                    })}
                </div>

                <button className="binary-search__sort-button" onClick={this.next}>Next</button>
            </div>
        );
    }
}

export default BinarySearchWrap;
