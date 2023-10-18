import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import stylesCSS from './Menu.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Burger from './Burger';
import ButtonPage from './ButtonPage';



export default function Menu({ pageList, setPageIndex, pageIndex }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 850;

  return (
    <div className={styles.menu}>
      <div
        className={styles.logoName}
        onClick={() => setPageIndex(Object.keys(pageList)[0])}
      >
        <div className={styles.info}>INFO</div>
        <div>TARKOV</div>
      </div>


       <TransitionGroup className={styles.navbar}>
        {Object.keys(pageList).map((e) =>
          pageList[e] !== '' && !isMobile ? (
            <CSSTransition
              key={e}
              in={!isMobile}
              timeout={500}
              timein={500}
              classNames={"a_nav_button"}
              unmountOnExit
            >
              <ButtonPage 
                pageIndex={pageIndex} 
                pageList={pageList} 
                setPageIndex={setPageIndex}
                page={e}>
              </ButtonPage>
            </CSSTransition>
          ) : null
        )}
      </TransitionGroup>
       

      <TransitionGroup className={styles.burger}>
        {isMobile &&
            <CSSTransition
              key={"burger_css_tran"}
              timeout={500}
              timein={500}
              classNames={"a_burger"}
              unmountOnExit
              
            >
              <Burger 
                pageIndex={pageIndex} 
                pageList={pageList} 
                setPageIndex={setPageIndex}
                width={windowWidth}
              ></Burger>
            </CSSTransition>
        }
      </TransitionGroup>

    </div>
  );
}