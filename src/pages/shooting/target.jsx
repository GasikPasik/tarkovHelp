
import React, { useState, useEffect, useRef } from 'react';
import styles from './target.module.css';

export default function Target({speed, x, y, color, hit, size}) {

    const [vis, setVis] = useState(true);

    const deadline = Date.now();


    const getTime = () => {

        const time = Date.now() - deadline;

        if(Math.floor(time / 1000) >= speed * 0.99){
            setVis(false);
        }

    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
    }, []);
    
    
    const style = {backgroundColor : color, left : x, top: y, height: size, width: size, animationDuration: (speed) + "s" }
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleWindowMouseMove = event => {
        setCoords({
            x: event.clientX,
            y: event.clientY,
        });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
        window.removeEventListener(
            'mousemove',
            handleWindowMouseMove,
        );
        };
    }, []);


    function checkHit(){
        let centerX = x + size/2;
        let centerY = y + size/2;
        let distance = Math.sqrt(Math.pow(coords.x - centerX, 2) + Math.pow(coords.y - centerY, 2));
        distance = Math.floor(distance);
        setVis(false);
        hit(1 - distance/(size/2), Date.now() - deadline);
    }

    return (
        <>
        {vis && <div className={styles.target} onClick={(() => checkHit())} style={style}></div>}
        </>
    );
}


