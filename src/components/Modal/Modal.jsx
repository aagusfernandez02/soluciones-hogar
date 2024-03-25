import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ setIsModalOpened, title, description, images }) => {
  return (
    <>
        <div className={styles.modal_overlay} onClick={() => setIsModalOpened(false)}></div>
        <div className={styles.modal}>
            <a className={styles.close_btn} onClick={() => setIsModalOpened(false)}><i className="bi bi-x-lg"></i></a>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={styles.gallery}>
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Modal
