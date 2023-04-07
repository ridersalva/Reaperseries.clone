import React from 'react';
import './Scuba.css';
import { Container, Image, Carousel } from 'react-bootstrap';
import ScubaH from './Pictures/cabcera buzo.png';
import Scuba_carousel from '../components/Carousel/Scuba_carousel';

function ScubaPage() {
    return (
        <>
            <Image className='headerScuba' src={ScubaH} />
            <Container className='pageScuba'>
                <Scuba_carousel/>
            </Container>
            ScubaPage</>
    )
}

export default ScubaPage