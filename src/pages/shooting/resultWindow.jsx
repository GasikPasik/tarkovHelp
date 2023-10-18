import React, { useState, useEffect } from 'react';
import indexStyles from './index.module.css';
import styles from './resultWindow.module.css';

export default function ResultWindow({ data, nextWindow }) {

  console.log(data);


  return (
    <div className={"full_size " + styles.main_div}>

      <div className={styles.row}>Попаданий:<div className={styles.data}>{data.cntHits}</div></div>
      <div className={styles.row}>Точность:<div className={styles.data}>{data.accuracyOfHits}</div>%</div>
      <div className={styles.row}>Скорость реакции:<div className={styles.data}>{data.speedOfHits}</div>мс</div>


      <button className={indexStyles.btn + " " + styles.btn} onClick={nextWindow}>Restart</button>
    </div>
  );
}
