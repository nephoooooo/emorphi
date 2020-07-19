import React from 'react';

import selectOptions from '../../utils/selectOptions';

const PATHS = {
    'normal': 'M-8 5 Q0 0, 8 5',
    'raised': 'M-7 0 Q0 -8, 7 0',
    __DEFAULT: 'normal',
};

const Eyebrow = ({ x = 0, y = 0, variant = 'normal' }) => {
    return (
        <g transform={`translate(${x} ${y})`}>
            <path className="Eyebrow" d={selectOptions(PATHS, variant)} />

            <style jsx>{`
                .Eyebrow {
                    transition: d 100ms;
                    fill: transparent;
                    stroke: black;
                    stroke-width: 3;
                    stroke-line-cap: round;
                }
            `}</style>
        </g>
    );
}

export default Eyebrow;