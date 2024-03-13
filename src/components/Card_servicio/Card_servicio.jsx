import React from 'react';
import styles from './Card_servicio.module.css';

const Card_servicio = ({title, children}) => {
    return (
        <div className={styles.card_container}>
            { children }
            <h3>{title}</h3>
        </div>
    )
}

export default Card_servicio