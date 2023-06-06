import React from 'react'
import { Container,Image } from 'react-bootstrap'
import './Filosofia.css'
import filosofiaPic from './Pictures/loto solo.png'

function Filosofia() {
  return (
    <>
      <Container className='filosofiaF'>
       <h1>Filosofia</h1>
        <p> Serenitas Et Audacia, como puedes ver en uno de nuestros diseños, se traduces como tranquilidad y valentia, una frase que refleja
          perfectamente nuestra visión en Reaperseries co. avanzando paso a paso, trabajando dia a dia para crear diseños diferentes que tratan sobre
          el mar, la montaña y los deportes que se disfrutan de ambos ambientes
           donde siempre hay que mantener la calma y ser valiente.</p>

        <p>En todos nuestros diseños puedes encontrar un coordenadas que introducidas
          en un buscador, pueden mostraros lugares interesantes.</p>
          <h3>Reaperseries co.</h3>
        <Image src={filosofiaPic} className='filosofiaPic'/>
      </Container>
    </>
  )
}

export default Filosofia