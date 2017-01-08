import React from 'react';

const icons = {
    'back-arrow': 'M351.846, 368.432c-15.414-16.809-28.746-29.589-39.99-38.34c-11.242-8.754-21.85-15.272-31.82-19.561v-7.825 c11.477-5.563, 22.604-12.665,33.385-21.3c10.781-8.636, 23.646-21.299, 38.6-37.991h13.389 c-10.895, 23.299-22.312, 41.208-34.254, 53.728h197.332v17.562H331.154c8.812,11.242, 14.955, 19.589, 18.432,25.039 c3.479, 5.447, 8.637, 15.01, 15.475, 28.688H351.846z'
};

export default (props) => {
    const color = props.color || 'white';
    return (
        <svg width={props.width} height={props.height} viewBox="254.262 155.923 300 300" fill={color}>
            <g>
                <path d={icons[props.name]} />
            </g>
        </svg>
    )
};
