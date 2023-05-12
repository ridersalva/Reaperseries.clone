import React from 'react'
import './CajaProductoExtreme.css';
import { Container, Image, Col, Form } from 'react-bootstrap';
import cBlExtreme from './camisetas/camiseta extreme blanco.png';

function CajaProducto13() {
    return (
        <>
            <Container className='cajaC1E'>
                <Image src={cBlExtreme} />
                    <Form className='checks'>
                        {['checkbox'].map((type) => (
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
            </Container>
        </>
    )
}

export default CajaProducto13