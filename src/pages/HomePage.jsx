import React from 'react';
import { Button, Image, Container } from 'react-bootstrap';
import './Pages.css';
import mons from './Pictures/mons web.png';
import buzo from './Pictures/buzo.png';
import hook from './Pictures/Hook web.png';
import extreme from './Pictures/wheel.png';
import Imagenes_home from '../components/Carousel/Imagenes_home';



function HomePage() {
  return (
    <>
      <Container className='home'>
        <Imagenes_home />
        <h1>Bienvenido al mundo de Reaperseries co.</h1>
        <hr />
        <h4>
          Nuestros productos estan hechos a mano por nuestro equipo así que cada sudadera es casi irrepetible
        </h4>
        <h1>COLECCIONES</h1>
        <div className='buttonGroup'>
          <Button ><Image src={mons} /></Button>
          <Button><Image src={hook} /></Button>
          <Button><Image src={extreme} /></Button>
          <Button><Image src={buzo} /></Button>
        </div>
        <p>image group</p>
      </Container>
    </>
  )
}

export default HomePage