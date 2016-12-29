import React from 'react';
import './SingleNode.scss';

export default function SingleNode(props) {
    const style = {
        transform: `translateX(${props.position}px)`,
        'background-color': `hsl(${props.value * 5 + 50}, 50%, 50%)`
    }

    return (
        <div className={`node ${props.classes ? props.classes : ''}`}
            style={style}
            onClick={ () => props.setSearchedValue(props.children) }
        >
            {props.children}
        </div>
    );
};
