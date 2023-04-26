import React from 'react';
import './Scuba.css';
import { Container, Image, Carousel, Row, Col,Button } from 'react-bootstrap';
import ScubaH from './Pictures/cabcera buzo.png';
import Scuba_carousel from '../components/Carousel/Scuba_carousel';
import CajaProducto from '../components/Caja_Producto/CajaProducto';
import CajaProducto1 from '../components/Caja_Producto/CajaProducto1';
import CajaProducto2 from '../components/Caja_Producto/CajaProducto2';
import CajaProducto3 from '../components/Caja_Producto/CajaProducto3';
import CajaProducto4 from '../components/Caja_Producto/CajaProducto4';

function ScubaPage() {
    return (
        <>
            <Image className='headerScuba' src={ScubaH} />
            <Container className='pageScuba'>
                <Scuba_carousel />
            </Container>
            <hr color='black' className='line'/>
            <Container className='box'>
                <Row >
                    <Col flex xs={4} className='cScubaModels'>
                        <CajaProducto/>
                        <Button >Lo quiero</Button>
                    </Col>
                    <Col flex xs={4} className='cScubaModels'>
                        <CajaProducto1 />
                        <Button >Lo quiero</Button>
                    </Col>
                    <Col flex xs={4} className='cScubaModels'>
                        <CajaProducto2 />
                        <Button >Lo quiero</Button>
                    </Col>
                </Row>
                
            </Container>
            <Container className='sBox'>
                <Row >
                    <Col flex xs={6} className='sScubaModels'>
                        <CajaProducto3 />
                        <Button >Lo quiero</Button>
                    </Col>
                    <Col flex xs={6} className='sScubaModels'>
                        <CajaProducto4 />
                        <Button >Lo quiero</Button>
                    </Col>                  
                </Row>
                
            </Container>
        </>
    )
}

export default ScubaPage