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
    'closed-tightly': {
        whiteRadius: 14,
        irisRadius: 12,
        isClosed: true,
        isTightlyClosedEyeOn: true,
    },
    'sad': {
        whiteRadius: 14,
        irisRadius: 12,
        isClosed: true,
        isClosedEyeOn: true,
    },
};

OPTIONS.__DEFAULT = 'normal';

const Eye = ({ x = 0, y = 0, stareX = 0, stareY = 0.5, shouldBlink = true, variant = 'normal', instance = 'left' }) => {
    let classes = ['Eye'];

    let { whiteRadius, irisRadius, isClosed, isClosedEyeOn, isTightlyClosedEyeOn } = selectOptions(OPTIONS, variant);;

    if (isClosed) {
        classes.push('Eye--closed');
    } else if (shouldBlink) {
        classes.push('Eye--blink');
    }

    return (
        <g transform={`translate(${x} ${y})`}>
            <g className={classes.join(' ')}>
                <circle className="Eye-white" cx="0" cy="0" r={whiteRadius} fill="white" />
                <circle className="Eye-iris" cx={stareX * 2} cy={stareY * 2} r={irisRadius} fill="black" />
                <circle cx="8" cy="-6" r="4" fill="rgba(255, 255, 255, 0.9)" />
            </g>

            <ClosedEyeOverlay instance={instance} isOn={isClosedEyeOn} />
            <TightlyClosedEyeOverlay instance={instance} isOn={isTightlyClosedEyeOn} />

            <style jsx="true">{`
                .Eye {
                    clip-path: polygon(-16px -16px, 16px -16px, 16px 16px, -16px 16px);
                    transition: clip-path 100ms;
                }

                .Eye--blink {
                    animation: Eye-blink 5s ease-in-out infinite;
                }

                .Eye--closed {
                    clip-path: polygon(-16px 12px, 16px 12px, 16px 12px, -16px 12px);
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

                .Eye-overlay {
                    fill: transparent;
                    stroke: black;
                    stroke-width: 4;
                    stroke-linecap: round;
                    opacity: 0;
                }

                .Eye-overlay--on {
                    opacity: 1;
                    transition: opacity 250ms;
                }

                .Eye-overlay--off {
                    opacity: 0;
                }

                .Eye-overlay--flipped {
                    transform: scaleX(-1);
                }
            `}</style>
        </g>
    );
}

const ClosedEyeOverlay = ({ isOn, instance }) => {
    let classNames = [
        'Eye-overlay',
        `Eye-overlay--${isOn ? 'on' : 'off'}`,
    ];

    if (instance === 'left') {
        classNames.push('Eye-overlay--flipped');
    }

    return (
        <g>
            <path key="closedeye" className={classNames.join(' ')} d="M-12 4 Q0 12, 12 4" />
        </g>
    );
}

const TightlyClosedEyeOverlay = ({ isOn, instance }) => {
    let classNames = [
        'Eye-overlay',
        `Eye-overlay--${isOn ? 'on' : 'off'}`,
    ];

    if (instance === 'left') {
        classNames.push('Eye-overlay--flipped');
    }

    return (
        <g>
            <path key="tightlyclosedeye" className={classNames.join(' ')} d="M12 -12 L-12 0 L 12 12" />
        </g>
    );
}

export default Eye;