import React from 'react';
import { withKnobs, select } from "@storybook/addon-knobs";

import Animoji from './Animoji';

export default {
    title: 'Animoji',
    decorators: [withKnobs],
};

const expressionOptions = {
    'Normal': 'normal',
};

export const Expressions = () => (
    <Animoji
        expression={select('Expression', expressionOptions, expressionOptions.normal, 'EXPRESSION')}
    />
);