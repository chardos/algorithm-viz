import React from 'react';
import { Link } from 'react-router';
import './Header.scss';

export default function Header(props) {
    return (
        <div className="header">
            <Link to="/binarysearch" className="header__link">Binary search</Link>
            <Link to="/bubblesort" className="header__link">Bubble sort</Link>
        </div>
    );
};
