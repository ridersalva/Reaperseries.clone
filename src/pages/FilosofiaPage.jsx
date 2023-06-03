import React from 'react'
import { Container,Image } from 'react-bootstrap'
import './Filosofia.css'
import filosofiaPic from './Pictures/loto solo.png'

function Filosofia() {
  return (
    <>
      <Container className='filosofiaF'>
       <h1>Filosofia</h1>
        <p> </p>
        <Image src={filosofiaPic} className='filosofiaPic'/>
      </Container>
    </>
  )
}

export default Filosofia