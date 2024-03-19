import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={`${styles.carousel_container}`} id='home'>
                <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/2ea69a32-46cd-430b-b8da-e3f6850afee0?rule=hw396_70" className={`${styles.carousel_img} d-block w-100`} alt="foto presentacion 1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <img src="https://geeksroom.com/wp-content/uploads/2019/07/carpintero-pixabay.jpg" className={`${styles.carousel_img} d-block w-100`} alt="foto presentacion 2" />
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <img src="https://homesolution.net/blog/wp-content/uploads/2017/06/home-repairs-davie-florida-broward-county-hollywood.jpg" className={`${styles.carousel_img} d-block w-100`} alt="foto presentacion 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
            <div className={`${styles.home_heading}`}>
                <h2>Soluciones Oeste</h2>
                <h1>Soluciones a domicilio</h1>
                <a className='btn btn-outline-warning mt-2' href='#contacto'>Contactanos</a>
            </div>
        </>
    )
}

export default Home