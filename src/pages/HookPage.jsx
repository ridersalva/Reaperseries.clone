import React from 'react';
import { Container, Image,Row,Col,Button } from 'react-bootstrap';
import './Hook.css';
import CabezeraHook from './Pictures/cabecera pulpo.png';
import Hook_carousel from '../components/Carousel/Hook_carousel';
import CajaProducto8 from '../components/Caja_Producto/CajaProducto8';
import CajaProducto9 from '../components/Caja_Producto/CajaProducto9';
import CajaProducto10 from '../components/Caja_Producto/CajaProducto10';

function HookPage() {
  return (
    <>
      <Image className='headerHook' src={CabezeraHook} />
      <Container className='pageHook'>
        <Hook_carousel />
      </Container>
      <hr color='black' className='line' />
      <Container className='box'>
        <Row >
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto8 />
            <Button >Lo quiero</Button>
          </Col>
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto9 />
            <Button >Lo quiero</Button>
          </Col>
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto10 />
            <Button >Lo quiero</Button>
          </Col>
        </Row>

      </Container>
      </>
  )
}

export default HookPage