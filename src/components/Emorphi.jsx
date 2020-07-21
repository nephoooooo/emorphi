import React from 'react';

import Eye from './parts/Eye';
import Eyebrow from './parts/Eyebrow';
import Mouth from './parts/Mouth';

import selectOptions from '../utils/selectOptions';

const EYE_VARIANTS = {
    'normal': 'normal',
    'surprised': 'scared',
    'laughing': 'closed-tightly',
    'sad': 'sad',
    'angry': 'angry',
    'smirk': 'narrow',
    __DEFAULT: 'normal',
};

const EYEBROW_VARIANTS = {
    'normal': 'normal',
    'surprised': 'raised',
    'laughing': 'frown',
    'sad': 'sad',
    'angry': 'angry',
    __DEFAULT: 'normal',
};

const RIGHT_EYEBROW_VARIANTS = {
    ...EYEBROW_VARIANTS,
    'smirk': 'raised',
};

const MOUTH_VARIANTS = {
    'normal': 'smile',
    'surprised': 'o',
    'laughing': 'laugh',
    'sad': 'sad',
    'angry': 'angry',
    'smirk': 'smirk',
    __DEFAULT: 'normal',
};

const TRANSFORMS = {
    'normal': '',
    'surprised': 'translate(0 -2)',
    'laughing': 'translate(0 -8)',
    'sad': 'translate(0 5)',
    'angry': 'translate(-5 0)',
    'smirk': 'translate(0 -3)',
    __DEFAULT: 'normal',
}

const Emorphi = ({ expression = 'normal' }) => {
    return (
        <svg width="128" height="128">
            <circle key="face" cx="64" cy="64" r="64" fill="orange" />
            <g className="Emorphi-face" transform={selectOptions(TRANSFORMS, expression)}>
                <Eye key="eye--left" x="38" y="60" variant={selectOptions(EYE_VARIANTS, expression)} />
                <Eyebrow key="eyebrow--left" x="38" y="30" variant={selectOptions(EYEBROW_VARIANTS, expression)} />
                <Eye key="eye--right" x="90" y="60" variant={selectOptions(EYE_VARIANTS, expression)} instance="right" />
                <Eyebrow key="eyebrow--right" x="90" y="30" variant={selectOptions(RIGHT_EYEBROW_VARIANTS, expression)} instance="right" />
                <Mouth key="mouth" x="64" y="96" variant={selectOptions(MOUTH_VARIANTS, expression)} />
            </g>

            <style jsx="true">{`
                .Emorphi-face {
                    transition: transform 250ms forwards;
                }
            `}</style>
        </svg>
    );
}

export default Emorphi;