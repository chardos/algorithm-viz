import React from 'react';
import './CornerNumber.scss';

export default function CornerNumber(props){
    return (
        <div className="corner-number">{props.number}</div>
    )
}
