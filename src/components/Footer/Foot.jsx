import React from 'react';
import './Foot.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Square from '../Navbar/Squeare'

function Foot() {
    return (
        <>
            <Container className='foot' fixed="botton">
                <Row className='footElements'>
                    <Col xs={3}>
                        <p>logo instagram</p>
                        <p>logo facebook</p>
                    </Col>
                    <Col flex xs={6} className='footEleMed'>
                        <p>texto central</p>
                    </Col>
                    <Col xs={3}>
                        <p>vacia</p>
                    </Col>
                </Row>
            </Container>
            <Square/>
        </>
    )
}

export default Foot