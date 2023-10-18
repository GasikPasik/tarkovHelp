import React, { useState, useEffect } from 'react';
import indexStyles from './index.module.css';
import styles from './windowGame.module.css';
import Timer from './timer.jsx';
import Target from './target';

export default function WindowGame({ settings, duration, nextWindow, setData }) {
  const colorsOfTargets = [
    "#EFA94A",
    "#77DD77",
    "#FCE883",
    "#AFDAFC",
    "3E4717A",
    "#3EB489",
    "#CCCCFF",
    "#FFBD88"
  ];
  const [arrayOfTarget, setArrayOfTarget] = useState([]);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    const addElement = () => {
      let rect = document.getElementById("screenGame");
      if(rect === null){
        stopGenerating(); 
        return;
      }
      rect = rect.getBoundingClientRect();
      const size = Math.floor(Math.random() * (settings.size * settings.k) + settings.size);
      setArrayOfTarget((prevElements) => [
        ...prevElements,
        <Target
          key={arrayOfTarget.size}
          speed={Math.floor(Math.random() * (settings.speed * settings.k) + settings.speed)}
          size={size}
          color={colorsOfTargets[Math.floor(Math.random() * colorsOfTargets.length)]}
          x={Math.floor(Math.random() * (rect.right -rect.left - size) + rect.x)}
          y={Math.floor(Math.random() * (rect.bottom - rect.top - size) + rect.y)}
          hit={hit}
        />
      ]);
    };

    const timeout = setTimeout(() => {
      addElement();
      const interval = setInterval(addElement, settings.speedSpawn);

      return () => clearInterval(interval);
    }, 500);

    if (!isGenerating) {
      setArrayOfTarget((prevElements) => []);
      clearTimeout(timeout);
    }
    
    return () => clearTimeout(timeout);
  }, [isGenerating]);

  let cntHits = 0;
  let accuracyOfHits = 0;
  let speedOfHits = 0;

  function hit(accuracy, speed) {
    cntHits++;
    accuracyOfHits += accuracy;
    speedOfHits += speed;
  }

  const [isMobile, setMobile] = useState(window.innerWidth < 600);

  function updateSize(width) {
    setMobile(window.innerWidth < 600);
  }
  
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  
  function stopGenerating() {
    setIsGenerating(false);
  }

  function endTheGame(){
    console.log(cntHits)  
    
  //   .accuracyOfHits /= (data.cntHits == 0 ? 1 : data.cntHits);
  // data.accuracyOfHits = Math.round(data.accuracyOfHits * 10000) / 100;
  // data.speedOfHits /= (data.cntHits == 0 ? 1 : data.cntHits);
  // data.speedOfHits = Math.round(data.speedOfHits * 100) / 100;
    setData({cntHits : cntHits, accuracyOfHits: accuracyOfHits, speedOfHits : speedOfHits});
    nextWindow();
  }

  return (
    <div className={"full_size"}>
      <>
        <div className={styles.info_bar}>
          {!isMobile && (
            <div className={styles.left_block}>
              <div>Difficulty level: {settings.name}</div>
            </div>
          )}

          <div className={styles.central_block}>
            <Timer duration={duration} stopedFunc={endTheGame}/>
          </div>

          <div className={styles.right_block}>:D</div>
        </div>
      
        <div className={styles.main_div_game} id={"screenGame"}>
          {arrayOfTarget}
        </div>

        {/* <div className={styles.btn_bar}>
          <button className={indexStyles.btn} onClick={endTheGame}>End</button>
        </div> */}
      </>
    </div>
  );
}