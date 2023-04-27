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
import Home from './pages/Home';

function App() {
  return (
      <>
        <Header />
      </>

  );
}

export default App;
