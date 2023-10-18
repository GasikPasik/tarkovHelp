import React, { useState } from 'react'

import MainTitle from '../../components/MainTitle';
import FinderBlock from './finderBlock.jsx'
import AmmoBlock from './ammoBlock.jsx';

import styles from './mainBlock.module.css';

export default function MainBlock({ammoList, allCaliber}){

    const [filterAmmo, seFilterAmmo] = useState("All");
    const [isFullTable, setFullTable] = useState(false);
    let divListAmmo = {... ammoList};

    function updateFullTable(e){
        setFullTable(!isFullTable);
    }

    return (
        <div className={'full_size main_block'}>
            
            <MainTitle title="Таблица патрон" />

            { !isFullTable && <FinderBlock 
                allCaliber={allCaliber}
                filterAmmo={filterAmmo}
                seFilterAmmo={seFilterAmmo}
                />}

            <AmmoBlock 
                divListAmmo={divListAmmo}
                filterAmmo={filterAmmo}
                setFullTable={updateFullTable}
                isFullTable={isFullTable}/>

        </div>  
    );

}