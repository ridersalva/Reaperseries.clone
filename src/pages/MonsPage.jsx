import React from 'react';
import './Hook.css'
import {Image, Container,Row,Button,Col} from 'react-bootstrap';
import CabezeraMons from './Pictures/cabecera montaña.png';
import CajaProducto5 from '../components/Caja_Producto/CajaProducto5';
import CajaProducto6 from '../components/Caja_Producto/CajaProducto6';
import CajaProducto7 from '../components/Caja_Producto/CajaProducto7';


function MonsPage() {
  return (
    <>
      <Image src={CabezeraMons} className='headerHook' />
      <Container className='box'>
        <Row >
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto5 />
            <Button >Lo quiero</Button>
          </Col>
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto6 />
            <Button >Lo quiero</Button>
          </Col>
          <Col flex xs={4} className='cScubaModels'>
            <CajaProducto7 />
            <Button >Lo quiero</Button>
          </Col>
        </Row>

      </Container>
    </>


  )
}

export default MonsPage