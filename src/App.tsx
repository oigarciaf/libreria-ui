import React from 'react';
import axios from "axios";
import Libro from './pages/Libro';
import Autor from './pages/Autor';
import Idioma from './pages/Idioma';
import Editorial from './pages/Editorial';
import GeneroLibro from './pages/GeneroLibro';

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';// Importa el archivo de estilos CSS

import EstudianteModal from './pages/Prueva';
import Components from './pages/Components';

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
              <Link to="/components">Components</Link>
            </li>
            <li>
              <Link to="/libros">Libros</Link>
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
        <Route path="/components" element={<Components />} />
        <Route path="/home" element={<h1>Bienvenidos a la biblioteca</h1>} />
        <Route path="/libros" element={<Libro />} />
        <Route path="/provar" element={<EstudianteModal />}/>
      </Routes>
    </Router>

  );
}

export default App;
