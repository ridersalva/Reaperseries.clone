import React from 'react'
import './CajaProducto.css';
import { Container, Image, Row, Col, Form,Button } from 'react-bootstrap';
import cAzul from './camisetas/camiseta buzo azul.png';

function CajaProducto() {
    return (
        <>
            <Container className='cajaC1'>
                <Image src={cAzul} />
                <Row>
                    <Form className='checks'>
                        {['checkbox', 'radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Col flex xs={3}>
                                    <Form.Check
                                        inline
                                        label="S"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                </Col>
                                <Col flex xs={3}>
                                    <Form.Check
                                        inline
                                        label="M"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </Col>
                                <Col flex xs={3}>
                                    <Form.Check
                                        inline
                                        label="L"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                </Col>
                                <Col flex xs={3}>
                                    <Form.Check
                                        inline
                                        label="XL"
                                        type={type}
                                        id={`inline-${type}-4`}
                                    />
                                </Col>
                            </div>
                        ))}
                    </Form>
                </Row>
                <Row><Button classname='Add' /></Row>

            </Container>
        </>
    )
}

export default CajaProducto