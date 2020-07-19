import React from 'react';

import selectOptions from '../../utils/selectOptions';

const OPTIONS = {
    'normal': {
        whiteRadius: 14,
        irisRadius: 12,
    },
    'scared': {
        whiteRadius: 16,
        irisRadius: 10,
    },
};

OPTIONS.__DEFAULT = 'normal';

const Eye = ({ x = 0, y = 0, stareX = 0, stareY = 0.5, shouldBlink = true, variant = 'normal' }) => {
    let classes = ['Eye'];

    if (shouldBlink) {
        classes.push('Eye--blink');
    }

    let { whiteRadius, irisRadius } = selectOptions(OPTIONS, variant);;

    return (
        <g className={classes.join(' ')} transform={`translate(${x} ${y})`}>
            <g>
                <circle className="Eye-white" cx="0" cy="0" r={whiteRadius} fill="white" />
                <circle className="Eye-iris" cx={stareX * 2} cy={stareY * 2} r={irisRadius} fill="black" />
                <circle cx="8" cy="-6" r="4" fill="rgba(255, 255, 255, 0.9)" />
            </g>
            <style jsx>{`
                .Eye--blink {
                    animation: Eye-blink 5s ease-in-out infinite;
                }

                .Eye-white {
                    transition: r 100ms;
                }

                .Eye-iris {
                    transition: r 100ms;
                }

                @keyframes Eye-blink {
                    95% {
                        clip-path: polygon(-16px -16px, 16px -16px, 16px 16px, -16px 16px);
                    }
                    97.5% {
                        clip-path: polygon(-16px 12px, 16px 12px, 16px 12px, -16px 12px);
                    }
                    100% {
                        clip-path: polygon(-16px -16px, 16px -16px, 16px 16px, -16px 16px);
                    }
                }
            `}</style>
        </g>
    );
}

export default Eye;