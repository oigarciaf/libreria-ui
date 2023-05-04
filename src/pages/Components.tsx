import React from 'react';
import Autor from './Autor';
import Idioma from './Idioma';
import Editorial from './Editorial';
import GeneroLibro from './GeneroLibro';
import Accordion from 'react-bootstrap/Accordion';

function Components() {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header><h2>Autores</h2></Accordion.Header>
            <Accordion.Body>

                <Autor />

            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
            <Accordion.Header><h2>Idiomas</h2></Accordion.Header>
            <Accordion.Body>

                <Idioma />

            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header><h2>Editoriales</h2></Accordion.Header>
            <Accordion.Body>

                <Editorial />

            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header><h2>Generos Literarios</h2></Accordion.Header>
            <Accordion.Body>

                <GeneroLibro />

            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}
export default Components;
