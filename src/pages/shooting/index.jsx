import React, { useState } from 'react'
import styles from './index.module.css';
import MainTitle from '../../components/MainTitle';
import MyButtonValue from '../../components/MyButtonValue';
import ChangerWindow from './changerWindow.jsx';
import WindowGame from './windowGame.jsx';
import ResultWindow from './resultWindow';


export default function Shooting() {

  const [idScreen, setIdScreen] = useState(0);
  const [level, setLevel] = useState(0)
  const [duration, setDuration] = useState(0)

  const levelDict = {"Easy" : 0, "Normal" : 1, "Hard" : 2};
  const durationDict = {"10 sec" : 10, "20 sec" : 20, "30 sec" : 30};

  const defaultSettings = { 
    0 : {name : "easy", k : 1.8, size : 120, speed : 2, speedSpawn : 1500 }, 
    1 : {name : "normal", k : 1.5, size : 60, speed : 1.5, speedSpawn : 1200 }, 
    2 : {name : "hard", k : 1.5, size : 40, speed : 1, speedSpawn : 1000 }, }

  function updateData(value, func){
    if(value < 0){
      setIdScreen(idScreen-1);
      return;
    }
    
    func(value);
    setIdScreen(idScreen+1);
  }

  const [data, setData] = useState({});

  return (
    <div className='full_size main_block'>
        
        <MainTitle title="Тир" />

        <div className={styles.screen_game}>

          {idScreen == 0 &&
          <div className={styles.start_window}>
            <h1>Aim Trainer</h1>
            <button className={styles.btn} onClick={((e) => setIdScreen(1))}>Start</button>
          </div>}

          {idScreen == 1 && 
          <ChangerWindow 
            title={"Choose difficulty level"}
            options={levelDict}
            callback={updateData}
            setValue={setLevel}
          />}

          {idScreen == 2 && 
          <ChangerWindow 
            title={"Choose duration"}
            options={durationDict}
            callback={updateData}
            setValue={setDuration}
          />}

          {idScreen == 3 && <WindowGame settings={defaultSettings[level]} duration={duration} nextWindow={(() => setIdScreen(4))} setData={setData}></WindowGame>}

          {idScreen == 4 && <ResultWindow data={data} nextWindow={(() => setIdScreen(0))}></ResultWindow>}

       </div>
    </div>
  );
}


