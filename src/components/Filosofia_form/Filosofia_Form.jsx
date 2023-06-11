import React from 'react';
import { Form } from 'react-bootstrap';
import './Filosofia_Form.css';

function Filosofia_Form() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h1 className='Fcabecera'>Filosofia</h1>
                <Form.Text>

                    Serenitas Et Audacia, como puedes ver en uno de nuestros diseños, se traduces como tranquilidad y valentia, una frase que refleja
                    perfectamente nuestra visión en Reaperseries co. avanzando paso a paso, trabajando dia a dia para crear diseños diferentes que tratan sobre
                    el mar, la montaña y los deportes que se disfrutan de ambos ambientes
                    donde siempre hay que mantener la calma y ser valiente.

                </Form.Text>
                <Form.Text>
                    En todos nuestros diseños puedes encontrar un coordenadas que introducidas
                    en un buscador, pueden mostraros lugares interesantes.
                </Form.Text>
                <br />
                <Form.Text>
                    <h3 className='Ffirma'>Reaperseries co.</h3>
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default Filosofia_Form