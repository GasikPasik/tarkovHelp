import React from "react";
import InputSearcher from "../../components/InputSearcher";
import CheckButton from "../../components/CheckButton";

import styles from './finderBlock.module.css'

export default function FinderBlock({allCaliber, filterAmmo, seFilterAmmo}){

    function updateFilter(valueInput){
        const foundAmmo = allCaliber.filter(ammo => ammo.toLowerCase().includes(valueInput.toLowerCase()));
        if(foundAmmo.length === 1 && foundAmmo.length !== filterAmmo){
            seFilterAmmo(foundAmmo[0]);
        }
      //  console.log(filterAmmo, valueInput)
    }

    return(

        <div className={styles.finder_div}>
            <InputSearcher defaultValue={"Поиск по калибру..."} callback={updateFilter}/>
            <div className={styles.div_button}>
                {allCaliber.map((e) => 
                    <CheckButton 
                    key={e} 
                    callback={updateFilter}
                    isOn={filterAmmo === e ? true : false}>
                        {e}
                    </CheckButton>)}
            </div>
        </div>

    );

}