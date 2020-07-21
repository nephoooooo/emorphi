import React from 'react';

import selectOptions from '../../utils/selectOptions';

const NORMAL_CLIP = 'polygon(-16px -16px, 16px -16px, 16px 16px, -16px 16px)';
const CLOSED_CLIP = 'polygon(-16px 12px, 16px 12px, 16px 12px, -16px 12px)';
const OPTIONS = {
    'normal': {
        whiteRadius: 14,
        irisRadius: 12,
        clip: NORMAL_CLIP,
    },
    'scared': {
        whiteRadius: 16,
        irisRadius: 10,
        clip: NORMAL_CLIP,
    },
    'closed-tightly': {
        whiteRadius: 14,
        irisRadius: 12,
        clip: CLOSED_CLIP,
        isTightlyClosedEyeOn: true,
    },
    'sad': {
        whiteRadius: 14,
        irisRadius: 12,
        clip: CLOSED_CLIP,
        isClosedEyeOn: true,
    },
    'angry': {
        whiteRadius: 16,
        irisRadius: 8,
        clip: 'polygon(-16px 7px, 16px 7px, 16px 16px, -16px 16px)',
    },
    'narrow': {
        whiteRadius: 14,
        irisRadius: 12,
        clip: 'polygon(-16px 4px, 16px 4px, 16px 13px, -16px 13px)',
    },
};

OPTIONS.__DEFAULT = 'normal';

const Eye = ({ x = 0, y = 0, stareX = 0, stareY = 0.5, shouldBlink = true, variant = 'normal', instance = 'left' }) => {
    let classes = ['Eye'];

    let {
        whiteRadius,
        irisRadius,
        clip,
        isClosedEyeOn,
        isTightlyClosedEyeOn
    } = selectOptions(OPTIONS, variant);

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
                    clip-path: ${clip};
                    transition: clip-path 100ms;
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
                        clip-path: ${clip};
                    }
                    97.5% {
                        clip-path: ${CLOSED_CLIP};
                    }
                    100% {
                        clip-path: ${clip};
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