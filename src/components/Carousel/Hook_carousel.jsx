import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Hook2 from './imagenes/hook2.jpg';
import Hook3 from './imagenes/hook3.jpg';
import Hook4 from './imagenes/hook4.jpg';
import './Scuba_carousel.css';

function Hook_carousel() {
    return (
        <Carousel className="caroImage">
            <Carousel.Item>
                <Image
                    className="d-block w-50 h-50"
                    src={Hook2}
                    alt="Imagen Hook2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-50 h-50"
                    src={Hook3}
                    alt="Imagen Hook3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-50 h-50"
                    src={Hook4}
                    alt="Imagen Hook4"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Hook_carousel