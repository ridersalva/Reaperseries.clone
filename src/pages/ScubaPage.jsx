import React from 'react';
import './Scuba.css';
import { Container, Image, Carousel } from 'react-bootstrap';
import ScubaH from './Pictures/cabcera buzo.png';


function ScubaPage() {
    return (
        <>
            <Container>
                <Image className='headerScuba' src={ScubaH} />
                <Carousel>
                    <Carousel.Item>
                        <Image src='./Pictures/Scuba pic/2065652D-32A3-4281-956A-4AD227C946FD.jpg' alt='Primer Slide' />
                        <Carousel.Caption>
                            <h3>Primera imagen</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            ScubaPage</>
    )
}

export default ScubaPage