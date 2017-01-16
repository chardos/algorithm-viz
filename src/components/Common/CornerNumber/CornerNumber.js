import React from 'react';
import './CornerNumber.scss';

const mappings = {
    '/': '0101',
    '/binarysearch': '01',
    '/bubblesort': '01',
    '/quicksort': '02',
    '/bogosort': '03',
}

function getNumber(){
    const pathName = window.location.pathname;
    return mappings[pathName];
}

export default function CornerNumber(props){
    return (
        <div className="corner-number">{getNumber()}</div>
    )
}
