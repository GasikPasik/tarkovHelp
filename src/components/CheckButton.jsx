import React from "react";
import styles from "./CheckButton.module.css"

export default function CheckButton({children, isOn, callback, data}){

    return (
    <button 
        className={styles.check_button}
        key={children}
        id={isOn ? styles.button_on : styles.button_off}
        onClick={() => callback(typeof data !== 'undefined' ? data : children)}>
        {children}
    </button>
    );
}