import React, { Component } from 'react';
import { 
  useState 
  , useEffect
} from "react";



import { 
  LibroType
  , getLibro
  , addLibro
  , deleteLibro
  ,updateLibro
} from "../services/LibroServices"

import { faRoad } from '@fortawesome/free-solid-svg-icons';



function Libro() {

  const [libros, setLibros] = useState<LibroType[]>([]);
  const [libro, setLibro] = useState<string>("");

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLibro(e.target.value);
}
  return (
    <div  className="App">
      <h3>Bienvenido puede gestionar un libro o agregar un nuevo</h3>
      <br /><br /><br />
      <button className="btn btn-success">Agregar Libros</button>
      <br /><br />
      <table className="table ">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Genero</th>
            <th>Editorial</th>
            <th>Edicion</th>
            <th>Publicado</th>
            <th>idioma</th>
            <th>Imagen</th>
            <th>Resumen</th>
          </tr>
        </thead>
      
       
      </table>


    </div>
  )
}

export default Libro