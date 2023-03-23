import React from 'react'
import { Navbar, Container, Button, Image, Row, Col, Nav } from 'react-bootstrap'
import './Bar.css'

function Bar() {
    return (
        <Navbar className='Bar'>
            <Container>
                <Navbar.Brand href="#home">logo</Navbar.Brand>
                <Nav className='buttonLink'>
                    <Nav.Link href='#home'>Inicio</Nav.Link>
                    <Nav.Link href='#products'>Productos</Nav.Link>
                    <Nav.Link href='#about'>Filosofia</Nav.Link>
                    <Nav.Link href='#home'>Contact</Nav.Link>
                </Nav>
            </Container>

        </Navbar>
    )
}
export default Bar