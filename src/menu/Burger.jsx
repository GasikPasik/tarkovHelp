import React, { useState } from 'react';
import styles from './Burger.module.css';
import ButtonPage from './ButtonPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Burger({ pageList, setPageIndex, pageIndex, width }) {

    const [isOpenMenu, setOpenMenu] = useState(false);

    function openBurgeMenu(){
        setOpenMenu(!isOpenMenu);
    }

    function clickPage(idx){
        openBurgeMenu();
        setPageIndex(idx);
    }

    return (
        <div className={styles.burger}>

            <div className={styles.strip_list} onClick={openBurgeMenu}>
                {[...Array(3)].map((_, i) => (
                    <div className={styles.strip} key={i}></div>
                ))}
            </div>
            

            <TransitionGroup>
            {isOpenMenu  && 
                <CSSTransition
                key={"burger_panel_trans"}
                  timeout={500}
                  timein={500}
                  classNames={"a_panel_burger"}
                  unmountOnExit
                  
                  >
                    <div className={styles.panel_burger} style={{ width: width < 480 ? "100vw" : "40%"}}>
                        
                        <TransitionGroup className={styles.panel_burger_button_list}>
                            {Object.keys(pageList).map((e) =>
                            pageList[e] !== '' ? (
                                <ButtonPage 
                                pageIndex={pageIndex} 
                                pageList={pageList} 
                                setPageIndex={clickPage}
                                page={e}>
                                </ButtonPage>
                            ) : null
                            )}
                        </TransitionGroup>
                    </div>
                </CSSTransition>
            }
            </TransitionGroup>
            {isOpenMenu  && <div className={styles.bg_exit} onClick={(() => setOpenMenu(false))}></div>}

        </div>
    );
}