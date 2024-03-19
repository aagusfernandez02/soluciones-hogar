import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 60){
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <nav className={`${styles.header} ${isScrolled && styles.header_scrolled}`}>
            <a href='#home'>
                <img src="public/assets/images/logo.png" alt="Logo soluciones oeste" />
                <p className={`${styles.logo}`}>Soluciones Oeste</p>
            </a>
            <ul className={`${styles.links}`}>
                <li className={`${styles.link_item}`}>
                    <a href="#home" className={`${styles.link}`}>Home</a>
                </li>
                <li className={`${styles.link_item}`}>
                    <a href="#servicios" className={`${styles.link}`}>Servicios</a>
                </li>
                <li className={`${styles.link_item}`}>
                    <a href="#nosotros" className={`${styles.link}`}>Nosotros</a>
                </li>
                <li className={`${styles.link_item}`}>
                    <a href="#contacto" className={`${styles.link}`}>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar