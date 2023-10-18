import React, { useState, useEffect } from 'react';
import Menu from './menu/Menu.jsx';
import styles from './App.module.css';

import Home from './pages/home/index.jsx';
import Ammo from './pages/ammo/index.jsx';
import Quests from './pages/quests/index.jsx';
import News from './pages/news/index.jsx';
import Posts from './pages/posts/index.jsx';
import Shooting from './pages/shooting/index.jsx';
import Assembly from './pages/assembly/index.jsx';

export default function App() {

  const [isMobile, setMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
      const handleResize = () => {
        setMobile((window.innerWidth < 1100));
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  let pageList = {
    "Home" : "", 
    "Ammo" : "Патроны",
    "Quests" : "Квесты",
    "News" : "Новости",
    "Posts" : "Посты",
    "Shooting" : "Тир",
    "Assembly" : "Сборки",
  }

  let [pageIndex, setPageIndex] = useState(Object.keys(pageList)[0]);
  
  return (
    <div className={styles.app}>


      <Menu pageList={pageList} setPageIndex={setPageIndex} pageIndex={pageIndex}/>
      
      <div className={styles.main_div}>
        
        <div className={styles.background}>


          <div className={styles.central_block} style={{ width: isMobile ? "100%" : "60%"}}>

              {pageIndex === "Home" ? <Home pageList={pageList} setPageIndex={setPageIndex}/>: ""}
              {pageIndex === "Ammo" ? <Ammo/>: ""}
              {pageIndex === "Quests" ? <Quests/>: ""}
              {pageIndex === "News" ? <News/>: ""}
              {pageIndex === "Posts" ? <Posts/>: ""}
              {pageIndex === "Shooting" ? <Shooting/>: ""}
              {pageIndex === "Assembly" ? <Assembly/>: ""}

          </div>

        </div>

      </div>

    </div>
  );
}


