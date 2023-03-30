import React from 'react'
import { Carousel, Image } from 'react-bootstrap';
import './Imagenes_home.css';

function Imagenes_home() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src='./imagenes/_DSC0114.jpg'
          alt="logoclassic"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src='./imagenes/1510646_734490823325701_335514493406597937_n.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Imagenes_home