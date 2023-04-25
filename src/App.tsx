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
import Header from './components/Header';

function App() {
  return (
      <>
        <Header />
        <div style={{ backgroundImage : 'url("../public/Images/cool-background.jpg")' }}>
        </div>
      </>

  );
}

export default App;
