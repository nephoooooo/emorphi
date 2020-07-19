import React from 'react'
import styles from './styles.module.css'

import AnimojiComponent from './components/Animoji';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Animoji = AnimojiComponent;