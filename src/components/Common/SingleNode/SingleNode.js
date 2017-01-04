import React from 'react';
import './SingleNode.scss';

export default function SingleNode(props) {
    const style = {
        transform: `translateX(${props.position}px)`,
        backgroundColor: `rgba(0,0,0, ${props.value/20 + .2})`
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
