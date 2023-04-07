import React from 'react';
import { Navbar, Container, NavLink, NavDropdown, Nav, Image } from 'react-bootstrap';
import './Bar.css';
import { Link } from 'react-router-dom';
import logo_white from "./logo menu blanco.png";
import Square from "./Squeare";

function Bar() {
    return (
        <>
            <Square/>
            <Navbar className='Bar' fixed='top'>

                <Container className='inside'>
                    <Image className='mainLoto' src={logo_white} alt='company_logo' />
                    <Navbar.Brand href="#home" onclick="color">logo</Navbar.Brand>
                    <Nav className='buttonLink'>
                        <Link to="/" href='#home'>Inicio</Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown" href='#products'>
                            <Nav.Link to="/scuba" href="Scuba">Scuba</Nav.Link>
                            <Link href="#action/3.2">Sudaderas</Link>
                        </NavDropdown>
                        <Nav.Link href='#about'>Filosofia</Nav.Link>
                        <Link to="/contact" href='Contact'>Contact</Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}
export default Bar