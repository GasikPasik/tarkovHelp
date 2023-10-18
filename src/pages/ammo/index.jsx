'use client' 
import React from 'react'
import styles from './index.module.css';

import MainBlock from './mainBlock.jsx';

import { all_ammo } from './data.jsx';

function makeDivAmmo(){

    var temp_all_ammo = { ...all_ammo };
    
    for (let ammoType in temp_all_ammo) {
        let ammoArray = temp_all_ammo[ammoType];
        for (let i = 0; i < ammoArray.length; i++) {
            let subArray = ammoArray[i];
            subArray[0] = <img key={ammoArray[1]} className={styles.image_ammo} src={"https://static.wikia.nocookie.net/escapefromtarkov_ru_gamepedia/images/1/18/12x70_SuperFormance_icon.png"} alt="404"/>;
            for(let k = 1; k < subArray.length; k++){
                subArray[k] = <div>{subArray[k]}</div>
            }
       
        }
    }

    return temp_all_ammo;
    

}

export default function Ammo() {

    
    let ammoList = makeDivAmmo();

    let allCaliber = (Object.keys(all_ammo));
    allCaliber.unshift("All");  



    return (
        <div className='full_size'>

            <MainBlock
            ammoList={ammoList}
            allCaliber={allCaliber}/>

        </div>
    );
}


