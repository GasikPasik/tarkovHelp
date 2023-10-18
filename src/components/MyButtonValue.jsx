
import React from "react";
import styles from "./MyButtonValue.module.css"

export default function MyButtonValue({children, callback, data}){

    return (
    <button 
        className={styles.my_button_value}
        key={children}
        onClick={() => callback(data)}>
        {children}
    </button>
    );
}