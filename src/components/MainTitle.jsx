import React from 'react'
import styles from './MainTitle.module.css';
import '../index.css';

export default function MainTitle({title}) {

  return (

    <div className={styles.title}>{title}</div>

  );
}


