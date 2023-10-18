import React, { useState, useEffect } from 'react';


export default function Timer({duration, stopedFunc}) {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = Date.now();

    const getTime = () => {

        const time = Date.now() - deadline;

        if(Math.floor(time / 1000) >= duration){
            stopedFunc();
        }

        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));

    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, []);
    

    return (
        <div>
            {minutes < 10 ? "0" + minutes : minutes}
            :
            {seconds < 10 ? "0" + seconds : seconds}

        </div>
    );
}


