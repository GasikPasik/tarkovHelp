import React from "react";
import styles from './iconButton.module.css'

export default function IconButton({children, isOn, callback, data}){


    return(

        <div 
            className={styles.main_div}
            id={isOn ? styles.isOn : ""}
            onClick={() => callback(data)}
        >
            {children}
        </div>

    );

}