import React from 'react';
import styles from './Nosotros.module.css'

const Nosotros = () => {
  return (
    <div className={styles.nosotros_container} id='nosotros'>
      <h2>Nosotros</h2>
      <p>Somos una empresa que brinda soluciones integrales de <strong>mantenimiento</strong> y <strong>reparación</strong>, tanto para <strong>hogares</strong> como para <strong>empresas</strong>. 
        Nos caracterizamos por nuestro excelente servicio, abarcando desde la <strong>identificación del problema</strong>, la <strong>solución</strong> de este, y una <strong>limpieza</strong> del espacio de trabajo al finalizar.</p>
    </div>
  )
}

export default Nosotros