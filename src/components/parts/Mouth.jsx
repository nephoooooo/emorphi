import React from 'react';

import selectOptions from '../../utils/selectOptions';

const UPPER_LIP_PATHS = {
    'smile': 'M-16 -5 Q-8 -2, 0 -2 Q8 -2, 16, -5',
    'o': 'M-12 0 Q-10 -12, 0 -12 Q10 -12, 12 0',
    __DEFAULT: 'smile',
};

const LOWER_LIP_PATHS = {
    'smile': 'M-16 -5 Q-8 0, 0 0 Q8 0, 16, -5',
    'o': 'M-12 0 Q-12 16, 0 16 Q12 16, 12 0',
    __DEFAULT: 'smile',
};

const FILL_PATHS = {
    'smile': 'M-16 -5 Q-8 0, 0 0 Q8 0, 16, -5 Q8 -2, 0 -2 Q-8 -2, -16 -5',
    'o': 'M-12 0 Q-12 16, 0 16 Q12 16, 12 0 Q10 -12, 0 -12 Q-10 -12, -12 0',
    __DEFAULT: 'smile',
};

const Mouth = ({ x = 0, y = 0, variant = "smile" }) => {
    return (
        <g transform={`translate(${x} ${y})`}>
            <path className="Mouth" key="mouth" d={selectOptions(FILL_PATHS, variant)} />
            <path className="Lip" key="upper" d={selectOptions(UPPER_LIP_PATHS, variant)} />
            <path className="Lip" key="lower" d={selectOptions(LOWER_LIP_PATHS, variant)} />

            <style jsx>{`
                .Lip {
                    transition: d 100ms;
                    fill: transparent;
                    stroke: black;
                    stroke-width: 3;
                    stroke-line-cap: round;
                }

                .Mouth {
                    fill: rgba(0, 0, 0, 0.75);
                    transition: d 100ms;
                }
            `}</style>
        </g>
    );
}

export default Mouth;