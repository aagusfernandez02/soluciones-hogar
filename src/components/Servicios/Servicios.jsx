import React from 'react';
import styles from './Servicios.module.css';
import Card_servicio from '../Card_servicio/Card_servicio';

const Servicios = () => {
  return (
    <div className={styles.servicios_container} id='servicios'>
      <h2>Servicios</h2>
      <div className={styles.servicios}>
        <Card_servicio title="Mantenimiento general en domicilios"><i className="bi bi-house"></i></Card_servicio>
        <Card_servicio title="Mantenimiento general para empresas"><i className="bi bi-briefcase"></i></Card_servicio>
        <Card_servicio title="Colocación de artefactos eléctricos"><i className="bi bi-plug"></i></Card_servicio>
        <Card_servicio title="Trabajos de herreria"><i className="bi bi-hammer"></i></Card_servicio>
      </div>
    </div>
  )
}

export default Servicios