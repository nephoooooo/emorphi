import React from 'react';

import selectOptions from '../../utils/selectOptions';

const UPPER_LIP_PATHS = {
    'smile': 'M16 -5 Q8 -2, 0 -2 Q-8 -2, -16, -5',
    'o': 'M12 0 Q10 -12, 0 -12 Q-10 -12, -12 0',
    'laugh': 'M25 -12 Q8 -12, 0 -12 Q-8 -12, -25 -12',
    'sad': 'M20 5 Q15 -3, 0 -3 Q-15 -3, -20, 5',
    __DEFAULT: 'smile',
};

const LOWER_LIP_PATHS = {
    'smile': 'M-16 -5 Q-8 0, 0 0 Q8 0, 16, -5',
    'o': 'M-12 0 Q-12 16, 0 16 Q12 16, 12 0',
    'laugh': 'M-25 -12 Q-20 10, 0 10 Q20 10, 25 -12',
    'sad': 'M-20 5 Q-15 1, 0 1 Q15 1, 20 5',
    __DEFAULT: 'smile',
};

const FILL_PATHS = {
    'smile': 'M-16 -5 Q-8 0, 0 0 Q8 0, 16, -5 Q8 -2, 0 -2 Q-8 -2, -16 -5',
    'o': 'M-12 0 Q-12 16, 0 16 Q12 16, 12 0 Q10 -12, 0 -12 Q-10 -12, -12 0',
    'laugh': 'M-25 -12 Q-20 10, 0 10 Q20 10, 25 -12 Q8 -12, 0 -12 Q-8 -12, -25 -12',
    'sad': 'M-20 5 Q-15 1, 0 1 Q15 1, 20, 5 Q15 -3, 0 -3 Q-15 -3, -20 5',
    __DEFAULT: 'smile',
};

const Mouth = ({ x = 0, y = 0, variant = "smile" }) => {
    return (
        <g transform={`translate(${x} ${y})`}>
            <clipPath id="mouth-path">
                <path d={selectOptions(FILL_PATHS, variant)} />
            </clipPath>
            <g clipPath="url(#mouth-path)">
                <rect className="Mouth" key="mouth" x={-30} y={-30} width={60} height={60} />
                <rect fill="rgba(255, 255, 255, 0.87)" x={-30} y={-30} width={60} height={24} />
            </g>
            <path className="Lip" key="upper" d={selectOptions(UPPER_LIP_PATHS, variant)} />
            <path className="Lip" key="lower" d={selectOptions(LOWER_LIP_PATHS, variant)} />

            <style jsx="true">{`
                .Lip {
                    transition: d 100ms;
                    fill: transparent;
                    stroke: black;
                    stroke-width: 4;
                    stroke-linecap: round;
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