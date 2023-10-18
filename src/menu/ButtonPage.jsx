import React, {  } from 'react';
import styles from './ButtonPage.module.css';


export default function ButtonPage({ pageList, setPageIndex, pageIndex, page }) {
    return (
        <button
            id={pageIndex === page ? styles.isOn : ''}
            className={styles.nav_button}
            onClick={() => setPageIndex(page)}
        >
            {pageList[page]}
        </button>
    );
}