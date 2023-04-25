import React from 'react';
import './Scuba.css';
import { Container, Image, Carousel, Row, Col } from 'react-bootstrap';
import ScubaH from './Pictures/cabcera buzo.png';
import Scuba_carousel from '../components/Carousel/Scuba_carousel';
import CajaProducto from '../components/Caja_Producto/CajaProducto';

function ScubaPage() {
    return (
        <>
            <Image className='headerScuba' src={ScubaH} />
            <Container className='pageScuba'>
                <Scuba_carousel />
            </Container>
            <hr color='black' className='line'/>
            <Container>
                <Row className='cScubaModels'>
                    <Col flex xs={4} className='box1'>
                        <CajaProducto/>
                    </Col>
                    <Col flex xs={4}>
                        <CajaProducto />
                    </Col>
                    <Col xs={4}>
                        <CajaProducto />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='sScubaModels'>
                    <Col flex xs={6}>
                        <CajaProducto />
                    </Col>
                    <Col flex xs={6}>
                        <CajaProducto />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ScubaPage