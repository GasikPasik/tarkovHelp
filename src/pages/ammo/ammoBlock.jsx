import React, { useState, useEffect } from "react";
import styles from "./ammoBlock.module.css"
import CheckButton from "../../components/CheckButton";
import IconButton from "./iconButton";

export default function AmmoBlock({ divListAmmo, filterAmmo, setFullTable, isFullTable }) {

    const [typeOfTable, setTypeOfTable] = useState(getInitialTypeOfTable());
    

    function getInitialTypeOfTable() {
        return window.innerWidth < 850 ? 1 : 0;
    }

    function updateTypeOfTable(idx){
        setTypeOfTable(idx);
    }

    function updateSize(){
        setTypeOfTable(getInitialTypeOfTable());
    }
    
    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);
      
    const arrayTitle = ["", "", "Урон", "Бронепробитие", "Скорость"];

    return (
        <div className={styles.div_ammo}>

            <div className={styles.type_of_table}>

                <CheckButton
                    isOn={typeOfTable === 0}
                    data={0}
                    callback={updateTypeOfTable}
                >
                    Def
                </CheckButton> 
                
                <CheckButton
                    isOn={typeOfTable === 1}
                    data={1}
                    callback={updateTypeOfTable}
                >
                    P
                </CheckButton>

                <CheckButton
                    isOn={isFullTable}
                    callback={setFullTable}
                >
                    FS
                </CheckButton>


            </div>

            {typeOfTable === 0 ?
                <div className={styles.div_ammo}>
                    <div key="titleOfTable" className={styles.table}>
                        <div className={styles.row}>
                            {arrayTitle.map((e) => (
                                <div>{e}</div>
                            ))}
                        </div>
                    </div>

                    <div key="bodyOfTable" className={styles.table}>

                        {Object.keys(divListAmmo).map((caliber, index) => (
                            <>
                                { (filterAmmo === "All" || caliber === filterAmmo) && 
                                    <div key={index} className={styles.mini_table}>
                                        <div className={styles.mini_title}>{caliber}</div>
                                        {divListAmmo[caliber].map((array, idx) => (
                                            <div className={styles.row} key={idx}>
                                                {array.map((e, innerIdx) => (
                                                    <React.Fragment key={innerIdx}>{e}</React.Fragment>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </>
                        ))}

                    </div>
                </div> 
                :  
                <div key="bodyOfPlate" className={styles.table}>

                  {Object.keys(divListAmmo).filter((caliber) => filterAmmo === "All" || caliber === filterAmmo).map((caliber, index) => (
                      <div className={styles.plate_title}>
                          <div> {caliber} </div>
                          <div key={index} className={styles.segment_plate}>
                              {divListAmmo[caliber].map((array, idx) => (
                                  <div key={idx} className={styles.plate}>
                                      {array.map((e, index) => (
                                          <div className={styles.plate_body}>
                                              {arrayTitle[index] !== "" && <div className={styles.palte_row_title}>{arrayTitle[index]}</div>}
                                              {e}
                                          </div>
                                      ))}
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}

                </div>
            }

        </div>
    );
}
