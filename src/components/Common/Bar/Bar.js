
import React from 'react';
import './Bar.scss';

/**
 * Bar view that renders each "node" as a bar of length corresponding to its
 * value. Alternate view that is visually clearer than the numbers.
 */
export default function Bar(props: {}) {
    const style = {
        transform: `translateX(${props.position + 20}px)`,
        height: props.children * 10,
        backgroundColor: `rgba(0,0,0, ${props.value/20 + .2})`
    }

    return (
        <div className={`bar ${props.classes ? props.classes : ''}`}
            style={style}
            onClick={ () => props.setSearchedValue(props.children) }
        />
    );
};
