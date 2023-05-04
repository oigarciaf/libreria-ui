import { IconProp, icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEdit, faImage, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { idText } from 'typescript';
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Autor from './Autor';
import {
  useState
  , useEffect
} from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  LibroType
  , getLibro
  , addLibro
  , deleteLibro
  , updateLibro
} from "../services/LibroServices"
import { AutorType, getAutores, addAutor } from '../services/AutorServices';



function Libro() {

  const [libros, setLibros] = useState<LibroType[]>([]);
  const [libro, setLibro] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //###########################################
  const [autores, setAutores] = useState<AutorType[]>([])
  const [autor, setAutor] = useState<string>("");
  const [showInput, setShowInput] = useState(false);
  const [id_autor, setIdAutor] = useState("");
  const [id_libro, setIdLibro] = useState("");
  useEffect(() => {
    async function fetchData() {

      const autores = await getAutores(); // Obtiene la lista de autores
      setAutores(autores); // Actualiza la lista de autores con los datos obtenidos
    };
    fetchData();
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setIdAutor(value);
  };

 
  const addAutorEvent = async () => {
    const newAutor = await addAutor(autor); // Agrega un nuevo autor
    setAutores([...autores, newAutor]); // Actualiza la lista de autores con el nuevo autor agregado
    setAutor(""); // Limpia el campo de entrada del autor
    setShowInput(false);
  }
  //###########################################
  const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setIdLibro(value);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLibro(e.target.value);
  }

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  }
  const handleGuardarLibro = () => {
    const addLibroEvent = async () => {
      const newLibro: LibroType = { /* Crear un objeto LibroType a partir de la cadena de texto 'libro' */
        id: 0,
        id_autor: 0,
        id_editorial: 0,
        id_genero_libro: 0,
        id_idioma: 0,
        codigo: "",
        titulo: "",
        edicion: 0,
        year_publicacion: 0,
        imagen: selectedFile!,
        resumen: ""

      };
      const result = await addLibro(newLibro); // Agrega un nuevo autor
      setLibros([...libros, result]); // Actualiza la lista de autores con el nuevo autor agregado
      setLibro(""); // Limpia el campo de entrada del autor
    }


    // Aquí puedes agregar la lógica para guardar la información del estudiante
    //console.log("Guardando estudiante:", { nombre, apellido, fechaNacimiento, telefono, email });
    handleCloseModal();
  };

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        // Realizar la llamada a la función getLibro() para obtener los libros del servidor
        const librosData = await getLibro();
        setLibros(librosData); // Actualizar el estado libros con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener los libros:", error);
      }
    }

    fetchLibros(); // Llamar a la función fetchLibros al montar el componente
  }, []); // El array vacío [] como segundo argumento de useEffect indica que solo se debe llamar al montar y desmontar el componente

  return (
    <div className="App">
      <br /><br /><br />
      <h3>Bienvenido puede gestionar un libro o agregar un nuevo</h3>
      <div className='d-flex justify-content-between mb-3'>
        <div className='col'>
          <br />
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleShowModal}>+Agregar Libros</button>
          <br /><br />
        </div>
        <div className='col-3'>
          <br />
          <input type='text' className='form-control' id='buscarRegistro' placeholder='buscar...'></input>
        </div>
      </div>

      {/* Renderizar los datos de libros en la tabla */}
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
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
              <td>{libro.id}</td>
              <td>{libro.titulo}</td>
              <td>{libro.id_autor}</td>
              <td>{libro.id_genero_libro}</td>
              <td>{libro.id_editorial}</td>
              <td>{libro.edicion}</td>
              <td>{libro.year_publicacion}</td>
              <td>{libro.id_idioma}</td>
              <td> {libro.imagen && (
                <img src={URL.createObjectURL(libro.imagen)} alt="Imagen del libro" />
              )}</td>
              <td>{libro.resumen}</td>
              <td>
                {/* <button
                  className="btn btn-primary"
                  onClick={() => {
                    // Lógica para manejar el clic del botón Editar

                  }}
                >
                  <FontAwesomeIcon icon={icon(faEdit) as IconProp} />
                </button>
                {"   "}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    // Lógica para manejar el clic del botón Eliminar

                  }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>*/}
              </td>

            </tr>

          ))}
        </tbody>
      </table>


      {/************** */}
      <Modal class="modal-dialog modal-lg" id="createModal" tabindex="-1" 
      aria-labelledby="createModalLabel" aria-hidden="true" isOpen={showModal} toggle={handleCloseModal}>

        <div className="">
          <div className="modal-dialog">
            <div className="modal-content">
              <ModalHeader toggle={handleCloseModal}>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="createModalLabel">Crear Libro</h1>
                </div></ModalHeader>
              <ModalBody>
                <div className="modal-body">
                  <form>
                    <div className='d-flex justify-content-between mb-3'>
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="titulo" className="form-label" >Codigo</label>
                        <input type="text" className="form-control" id="titulo" name="titulo" required />
                      </div>
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="titulo" className="form-label">Título</label>
                        <input type="text" className="form-control" id="titulo" name="titulo" required />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mb-3'>
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="id_autor" className="form-label">Autor</label>
                        <select className="form-select form-select-lg mb-3" id="id_autor" 
                        name="id_autor" required onChange={handleChange} value={id_autor}>
                          <option selected>Selecciona un Autor</option>
                          
                          {autores.map((autor) => (
                            <option key={autor.id} value={autor.id}>
                              {autor.descripcion}
                            </option>
                          ))}
                           
                        </select>
                       
                      </div>
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="id_genero_libro" className="form-label">Género</label>
                        <select className="form-select form-select-lg mb-3" id="id_genero_libro"
                         name="id_genero_libro" required onChange={handleChanges} value={id_libro}>
                          <option selected >Selecciona un Genero</option>
                          {libros.map((libro) => (
                            <option key={libro.id} value={libro.id}>
                              {libro.id}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                    <div className='d-flex justify-content-between mb-3'>
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="id_editorial" className="form-label">Editorial</label>
                        <select className="form-select form-select-lg mb-3" id="id_editorial" name="id_editorial" required >
                          <option selected>Selecciona una Editorial</option>
                          <option value="1"></option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="edicion" className="form-label">Edición</label>
                        <input type="text" className="form-control" id="edicion" name="edicion" required />

                      </div>

                    </div>

                    <div className='d-flex justify-content-between mb-3' >
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="year_publicacion" className="form-label">Año de publicación</label>
                        <input type="date" className="form-control" id="year_publicacion" name="year_publicacion" required />

                      </div>
                      <div className='flex-column align-items-start mb-3'>
                        <label htmlFor="id_idioma" className="form-label">Idioma</label>
                        <select className="form-select form-select-lg mb-3" id="id_idioma" name="id_idioma" required>
                          <option selected>Selecciona un idioma</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>

                        </select>


                      </div>

                    </div>

                    <div className='d-flex justify-content-between mb-3'>
                      <label htmlFor="imagen" className="form-label">Imagen</label>
                      <input type="file" className="form-control" id="imagen" name="imagen" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="resumen" className="form-label">Resumen</label>
                      <textarea className="form-control" id="resumen" name="resumen" required></textarea>
                    </div>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                  <button type="button" className="btn btn-primary" onClick={handleGuardarLibro} >Guardar</button>
                </div>
              </ModalFooter>
            </div>
          </div>
        </div>
      </Modal>

      {/************************ */}


    </div>
  )
}

export default Libro;
