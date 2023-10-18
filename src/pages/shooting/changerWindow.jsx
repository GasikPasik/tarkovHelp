import React, { useState } from 'react'
import styles from './changerWindow.module.css';
import indexStyles from './index.module.css';



export default function ChangerWindow({title, options, callback, setValue}) {

  return (
    <div className={'full_size ' + styles.changeWindow}>
        
        <div className={styles.title}>{title}</div>
        <div className={styles.div_optional}>
            {Object.keys(options).map((name, index) => (
                <button 
                    className={indexStyles.btn}
                    key={name}
                    onClick={(() => callback(options[name], setValue))}
                >
                    {name}
                </button>
            ))}
        </div>

        <button className={indexStyles.btn_second + ' ' + styles.btn_back} onClick={(() => callback(-1, setValue))}>Back</button>

    </div>
  );
}


