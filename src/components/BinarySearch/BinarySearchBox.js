import React from 'react';
import classNames from 'classnames';

const BinarySearchBox = function (props) {
    const style = {
        transform: `translateX(${props.position}px)`
    }
    const classes = classNames(
        'binary-search__box',
        {active: props.active},
        {selected: props.selected},
        {'not-found': props.notFound}
    )
    return (
        <div className={classes}
            style={style}
        >
            {props.children}
        </div>
    );
};

export default BinarySearchBox;
