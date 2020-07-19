import React from 'react';

const Animoji = ({ expression }) => {
    return (
        <svg width="128" height="128">
            <circle key="face" cx="64" cy="64" r="64" fill="orange" />
            <Eye key="eye--left" x="38" y="60" />
            <Eyebrow key="eyebrow--left" x="38" y="30" />
            <Eye key="eye--right" x="90" y="60" />
            <Eyebrow key="eyebrow--right" x="90" y="30" />
            <Mouth key="mouth" x="64" y="96" />
        </svg>
    );
}

const Eye = ({ x = 0, y = 0, stareX = 0, stareY = 0.5, shouldBlink = true }) => {
    let classes = ['Eye'];

    if (shouldBlink) {
        classes.push('Eye--blink');
    }

    return (
        <g className={classes.join(' ')} transform={`translate(${x} ${y})`}>
            <g>
                <circle cx="0" cy="0" r="16" fill="white" />
                <circle cx={stareX * 2} cy={stareY * 2} r="14" fill="black" />
                <circle cx="8" cy="-6" r="4" fill="rgba(255, 255, 255, 0.9)" />
            </g>
            <style jsx>{`
                .Eye--blink {
                    animation: Eye-blink 5s ease-in-out infinite;
                }

                @keyframes Eye-blink {
                    95% {
                        clip-path: inset(0 0 0 0);
                    }
                    97.5% {
                        clip-path: inset(60% 0 40% 0);
                    }
                    100% {
                        clip-path: inset(0 0 0 0);
                    }
                }
            `}</style>
        </g>
    );
}

const Eyebrow = ({ x = 0, y = 0 }) => {
    return (
        <g transform={`translate(${x} ${y})`}>
            <path key="upper" fill="transparent" stroke="black" strokeWidth="3" strokeLinecap="round" d="M-8 5 Q0 0, 8 5" />
        </g>
    );
}

const Mouth = ({ x = 0, y = 0 }) => {
    return (
        <g transform={`translate(${x} ${y})`}>
            <path key="upper" fill="transparent" stroke="black" strokeWidth="3" strokeLinecap="round" d="M-16 -5 Q0 0, 16 -5" />
            <path key="lower" fill="transparent" stroke="black" strokeWidth="3" strokeLinecap="round" d="M-16 -5 Q0 3, 16 -5" />
        </g>
    );
}

export default Animoji;