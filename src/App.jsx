import './App.css';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Servicios from './components/Servicios/Servicios';
import ContactSection from './components/ContactSection/ContactSection';

function App() {

  const [showSidebar, setShowSidebar] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 670) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    // Agrega un listener para el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llama a handleResize al cargar la página
    handleResize();

    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <> 
      <body>  
        {showSidebar ? <Sidebar /> : <Navbar />}
        <Home />
        <Servicios />
        <Nosotros />
        <ContactSection />
      </body>
    </>
  )
}

export default App
