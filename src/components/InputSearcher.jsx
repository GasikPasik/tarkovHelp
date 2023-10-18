import React, { useState }  from "react";
import styles from './InputSearcher.module.css'

export default function InputSearcher({defaultValue, callback}){

    const [value, set_value] = useState("");

    return (
        <div>

            <input
            className={styles.inputSearcher}
            placeholder={defaultValue} 
            value={value} 
            onChange={(e) => {
                set_value(e.target.value); 
                callback(e.target.value);
            }}/>

        </div>
    );

}