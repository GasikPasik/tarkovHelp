import React from 'react'
import styles from './index.module.css';
import MainTitle from '../../components/MainTitle';
import MyButtonValue from '../../components/MyButtonValue';

export default function Home({ pageList, setPageIndex }) {

  return (
    <div className={styles.main_div}>

      <MainTitle title="Домашняя страница" />

      
      <div className={styles.div_button}>
        {Object.keys(pageList).map((e) => (
          <>
            {pageList[e] !== "" ? (
              <MyButtonValue
                className={styles.my_button}
                key={e}
                data={e}
                callback={setPageIndex}
              >
                {pageList[e]}
              </MyButtonValue>
            ) : null}
          </>
        ))}
      </div>

    </div>
  );

}
