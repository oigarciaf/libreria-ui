import React from 'react';
import axios from "axios";
import Libro from './Libro';
import Autor from './Autor';
import Idioma from './Idioma';
import Editorial from './Editorial';
import GeneroLibro from './GeneroLibro';

function Components() {
    return (

        <div>
            <Autor />
            <Idioma />
            <Editorial />
            <GeneroLibro />
        </div>
    );
}
export default Components;
