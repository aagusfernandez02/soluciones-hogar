import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';

const Sidebar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  return (
    <>
      <HamburguerMenu isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
      {/* <div className={`${styles.sidebar_container} ${styles.closed}`}>Sidebar</div> */}
      <div className={`${styles.sidebar_container} ${!isMenuClicked && styles.closed}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#servicios">Nosotros</a>
          </li>
          <li>
            <a href="#nosotros">Servicios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar