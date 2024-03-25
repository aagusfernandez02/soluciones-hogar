import React, { useState } from 'react';
import styles from './Servicios.module.css';
import Card_servicio from '../Card_servicio/Card_servicio';
import Modal from '../Modal/Modal';

const Servicios = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const data_mantenimientoEmpresas = {
    images: [{ src: '/assets/images/trabajos/mantenimiento_empresas/escaleras_1.jpg', alt: 'imagen escalera 1' }, { src: '/assets/images/trabajos/mantenimiento_empresas/escaleras_2.jpg', alt: 'imagen escalera 2' }, { src: '/assets/images/trabajos/mantenimiento_empresas/rack_1.jpg', alt: 'imagen rack 1' }, { src: '/assets/images/trabajos/mantenimiento_empresas/rack_2.jpg', alt: 'imagen rack 2' }],
    title: "Mantenimiento general para empresas",
    description: "Trabajos de herreria, plomeria, electricidad, refrigeracion, entre otras tareas ideales para empresas. En las fotos vemos la reparación y colocación de escaleras y racks industriales para importante empresa distribuidora"
  }

  const handleClick_modal = (data_mantenimientoEmpresas) => {
    console.log(data_mantenimientoEmpresas)
    setImages(data_mantenimientoEmpresas.images);
    setTitle(data_mantenimientoEmpresas.title);
    setDescription(data_mantenimientoEmpresas.description);
    setIsModalOpened(true);
  }

  return (
    <div className={styles.servicios_container} id='servicios'>
      <h2>Servicios</h2>
      <p>Clickea en cada servicio si deseas ver mas informacion e imagenes de trabajos ya realizados</p>
      <div className={styles.servicios}>
        <a onClick={() => handleClick_modal(data_mantenimientoEmpresas)}><Card_servicio title="Mantenimiento general en domicilios"><i className="bi bi-house"></i></Card_servicio></a>
        <a onClick={() => handleClick_modal(data_mantenimientoEmpresas)}><Card_servicio title="Mantenimiento general para empresas" onClick={() => console.log("HOLA")}><i className="bi bi-briefcase"></i></Card_servicio></a>
        <a onClick={() => handleClick_modal(data_mantenimientoEmpresas)}><Card_servicio title="Colocación de artefactos eléctricos"><i className="bi bi-plug"></i></Card_servicio></a>
        <a onClick={() => handleClick_modal(data_mantenimientoEmpresas)}><Card_servicio title="Trabajos de herreria"><i className="bi bi-hammer"></i></Card_servicio></a>
        <a onClick={() => handleClick_modal(data_mantenimientoEmpresas)}><Card_servicio title="Instalación y reparacion de aires acondicionados"><i className="bi bi-snow"></i></Card_servicio></a>
        {/* <button className='btn btn-primary' onClick={()=>setIsModalOpened(true)}>OPEN MODAL</button> */}
        {isModalOpened && <Modal setIsModalOpened={setIsModalOpened} images={images} title={title} description={description} />}
      </div>
    </div >
  )
}

export default Servicios