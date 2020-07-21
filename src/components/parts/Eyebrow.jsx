import React from 'react';

import selectOptions from '../../utils/selectOptions';

const PATHS = {
    'normal': 'M-8 5 Q0 0, 8 5',
    'raised': 'M-7 0 Q0 -8, 7 0',
    'frown': 'M-10 17 Q-5 10, 3 5',
    'sad': 'M-5 0 Q0 8, 8 10',
    'angry': 'M-12 12 Q-5 17, 5 7',
    __DEFAULT: 'normal',
};

const Eyebrow = ({ x = 0, y = 0, variant = 'normal', instance = 'left' }) => {
    return (
        <g transform={`translate(${x} ${y})`}>
            <path className={`Eyebrow Eyebrow--${instance}`} d={selectOptions(PATHS, variant)} />

            <style jsx="true">{`
                .Eyebrow {
                    transition: d 100ms;
                    fill: transparent;
                    stroke: black;
                    stroke-width: 5;
                    stroke-linecap: round;
                }

                .Eyebrow--left {
                    transform: scaleX(-1);
                }
            `}</style>
        </g>
    );
}

export default Eyebrow;