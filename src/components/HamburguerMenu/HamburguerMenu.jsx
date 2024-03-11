import React, { useState } from 'react';
import styles from './HamburguerMenu.module.css';

const HamburguerMenu = ({isMenuClicked, setIsMenuClicked }) => {

  return (
    // <div className={isMenuClicked?`${styles.menu} ${styles.openmenu}`:styles.menu} onClick={()=>setIsMenuClicked(!isMenuClicked)}>
    <div className={`${styles.menu} ${isMenuClicked&&styles.openmenu}`} onClick={()=>setIsMenuClicked(!isMenuClicked)}>
      <div>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </div>
  )
}

export default HamburguerMenu