import React from 'react';
import './Foot.css';
import { Row, Col, Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <div className='foot' fixed="botton">
            <Stack direction='horizontal' gap={2}>
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
            </Stack>
        </div>
    )
}

export default Foot