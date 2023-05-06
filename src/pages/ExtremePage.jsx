import React from 'react';
import './Extreme.css';
import {Image, Container,Row,Col,Button } from 'react-bootstrap';
import headerExtreme from './Pictures/cabcera extreme.png';
import CajaProducto11 from '../components/Caja_Producto/CajaProducto11';
import CajaProducto12 from '../components/Caja_Producto/CajaProducto12';
import CajaProducto13 from '../components/Caja_Producto/CajaProducto13';

function ExtremePage() {
  return (
    <>
<Image src={headerExtreme} className='headerExtreme'/>
      <Container className='box'>
        <Row >
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto11 />
            <Button >Lo quiero</Button>
          </Col>
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto12 />
            <Button >Lo quiero</Button>
          </Col>
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto13 />
            <Button >Lo quiero</Button>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default ExtremePage