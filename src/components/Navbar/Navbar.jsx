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
            <p className={`${styles.logo}`}>ArreglaTuti</p>
            <ul className={`${styles.links}`}>
                <li className={`${styles.link_item}`}>
                    <a href="" className={`${styles.link}`}>Home</a>
                </li>
                <li className={`${styles.link_item}`}>
                    <a href="" className={`${styles.link}`}>Nosotros</a>
                </li>
                <li className={`${styles.link_item}`}>
                    <a href="" className={`${styles.link}`}>Servicios</a>
                </li>
                <li className={`${styles.link_item}`}>
                    <a href="" className={`${styles.link}`}>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar