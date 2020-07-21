import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import Emorphi from './Emorphi'

export default {
  title: 'Emorphi',
  decorators: [withKnobs]
}

const expressionOptions = {
  normal: 'normal',
  surprised: 'surprised',
  laughing: 'laughing',
  sad: 'sad',
  angry: 'angry',
  smirk: 'smirk'
}

export const Expressions = () => (
  <Emorphi
    expression={select(
      'Expression',
      expressionOptions,
      expressionOptions.normal,
      'EXPRESSION'
    )}
  />
)
