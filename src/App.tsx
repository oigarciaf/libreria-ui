import React from 'react';
import Autor from './pages/Autor';
import  axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';// Importa el archivo de estilos CSS
import Libro from './pages/Libro';

import EstudianteModal from './pages/Prueva';

function App() {
  return (
    <Router>
      <header className="header"> {/* Aplica la clase de estilo CSS en el encabezado */}
        <nav>
          <ul className="nav"> {/* Aplica la clase de estilo CSS en la lista de navegación */}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/autor">Autores</Link>
            </li>
            <li>
              <Link to="/libros">
                
                Libros</Link>
            </li>
            <li>
              <Link to="/provar">
                  prueba
                </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/autor" element={<Autor />} />
        <Route path="/home" element={<h1>Bienvenidos a la biblioteca</h1>} />
        <Route path="/libros" element={<Libro />} />
        <Route path="/provar" element={<EstudianteModal />}/>
      </Routes>
    </Router>

  );
}

export default App;
