import React from 'react';
import styles from './ContactSection.module.css';

const ContactForm = () => {

  let link_whatsapp = 'https://api.whatsapp.com/send?phone=541165854725&text=Hola%20Guillermo%2C%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F%0ATe%20contacto%20a%20trav%C3%A9s%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20que%20te%20comuniques%20conmigo!';


  return (
    <div className={styles.contact_section}>
      <h2>Contacto</h2>
      <p>Si queres ponerte en contacto con nosotros, ya sea por <strong>consultas</strong>, o para que te armemos un <strong>presupuesto</strong> no dudes en ponerte en contacto con nosotros.</p>
      <a className={`btn btn-success ${styles.contact_button}`} href={link_whatsapp} target='_blank'>
        <i class="bi bi-whatsapp"></i> Contactanos
      </a>
    </div>
  )
}

export default ContactForm