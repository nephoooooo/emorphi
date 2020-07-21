import React from 'react';

import Eye from './parts/Eye';
import Eyebrow from './parts/Eyebrow';
import Mouth from './parts/Mouth';

const EYE_VARIANTS = {
    'normal': 'normal',
    'surprised': 'scared',
    'laughing': 'closed-tightly',
    'sad': 'sad',
    'angry': 'angry',
    'smirk': 'narrow',
};

const EYEBROW_VARIANTS = {
    'normal': 'normal',
    'surprised': 'raised',
    'laughing': 'frown',
    'sad': 'sad',
    'angry': 'angry',
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
};

const Animoji = ({ expression = 'normal' }) => {
    return (
        <svg width="128" height="128">
            <circle key="face" cx="64" cy="64" r="64" fill="orange" />
            <Eye key="eye--left" x="38" y="60" variant={EYE_VARIANTS[expression]} />
            <Eyebrow key="eyebrow--left" x="38" y="30" variant={EYEBROW_VARIANTS[expression]} />
            <Eye key="eye--right" x="90" y="60" variant={EYE_VARIANTS[expression]} instance="right" />
            <Eyebrow key="eyebrow--right" x="90" y="30" variant={RIGHT_EYEBROW_VARIANTS[expression]} instance="right" />
            <Mouth key="mouth" x="64" y="96" variant={MOUTH_VARIANTS[expression]} />
        </svg>
    );
}

export default Animoji;