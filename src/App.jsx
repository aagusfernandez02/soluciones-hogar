import Home from './components/Home/Home';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

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
      {showSidebar ? <Sidebar /> : <Navbar />}
      <body>  
        <Home />
        <h1>Hello world</h1>
        <button className='btn btn-primary'>TEST</button>
        <ul>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
      </body>
    </>
  )
}

export default App
