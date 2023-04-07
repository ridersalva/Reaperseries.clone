import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Scuba1 from './Scuba pic/scuba1.jpg';
import LogosScuba from './Scuba pic/logos scuba.jpg';
import Scuba3 from './Scuba pic/scuba3.jpg';
import './Scuba_carousel.css';

function Scuba_carousel() {
    return (
        <Carousel className="caroImage">
            <Carousel.Item>
                <Image
                    className="d-block w-100 h-100"
                    src={Scuba1}
                    alt="Imagen Scurba"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 h-100"
                    src={LogosScuba}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 h-100"
                    src={Scuba3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Scuba_carousel