import React from 'react';
import './Bar.scss';

export default function Bar(props) {
    const style = {
        transform: `translateX(${props.position}px)`,
        height: props.children * 10
    }

    return (
        <div className={`bar ${props.classes ? props.classes : ''}`}
            style={style}
            onClick={ () => props.setSearchedValue(props.children) }
        />
    );
};
