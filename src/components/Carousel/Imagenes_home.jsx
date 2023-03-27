import React from 'react'
import { Carousel, Image } from 'react-bootstrap';
import './Imagenes_home.css';

function Imagenes_home() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src='./_DSC0114.jpg'
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
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  )
}

export default Imagenes_home