import React from 'react';

const BinarySearchBox = function (props) {
    const style = {
        transform: `translateX(${props.position}px)`
    }
    return (
        <div className="binary-search__box"
            style={style}
        >
            {props.children}
        </div>
    );
};

export default BinarySearchBox;
