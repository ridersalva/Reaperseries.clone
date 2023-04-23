import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
import './Hook.css';
import CabezeraHook from './Pictures/cabecera pulpo.png';
import Hook_carousel from '../components/Carousel/Hook_carousel';

function HookPage() {
  return (
    <>
      <Image className='headerHook' src={CabezeraHook} />
      <Container className='pageHook'>
        <Hook_carousel />
      </Container>
      
      </>
  )
}

export default HookPage