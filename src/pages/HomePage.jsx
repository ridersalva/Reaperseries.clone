import React from 'react';
import { Button, ButtonGroup, Carousel } from 'react-bootstrap';
import './Pages.css';
import Imagenes_home from '../components/Carousel/Imagenes_home';



function HomePage() {
  return (
    <>
      <Imagenes_home />
      <h1>Bienvenido al mundo de Reaperseries co.</h1>
      <hr />
      <p>
        Nuestros productos estan hechos a mano por nuestro equipo así que cada sudadera es casi irrepetible
      </p>
      <h1>COLECCIONES</h1>
      <div className='buttonGroup'>
        <Button>Montaña</Button>
        <Button>Extreme</Button>
        <Button>Scuba</Button>
        <Button>Loto</Button>
        <Button>Adventure</Button>
      </div>
      <p>image group</p>
    </>
  )
}

export default HomePage