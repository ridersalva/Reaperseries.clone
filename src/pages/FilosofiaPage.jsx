import React from 'react'
import { Container,Image } from 'react-bootstrap'
import './Filosofia.css'
import filosofiaPic from './Pictures/loto solo.png'
import Filosofia_Form from '../components/Filosofia_form/Filosofia_Form'

function Filosofia() {
  return (
    <>
      <Container className='filosofiaF'>
        <Filosofia_Form/>
        <Image src={filosofiaPic} className='filosofiaPic'/>
      </Container>
    </>
  )
}

export default Filosofia