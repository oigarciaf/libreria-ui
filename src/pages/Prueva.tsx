import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

function EstudianteModal() {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleGuardarEstudiante = () => {
    // Aquí puedes agregar la lógica para guardar la información del estudiante
    console.log("Guardando estudiante:", { nombre, apellido, fechaNacimiento, telefono, email });
    handleCloseModal();
  };

  return (
    <>
      <Button  onClick={handleShowModal}>
        Agregar Estudiante
      </Button>

      <Modal isOpen={showModal} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal}>Agregar Estudiante</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="formNombre">Nombre</Label>
              <Input type="text" id="formNombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Label for="formApellido">Apellido</Label>
              <Input type="text" id="formApellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Label for="formFechaNacimiento">Fecha de nacimiento</Label>
              <Input type="date" id="formFechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Label for="formTelefono">Teléfono</Label>
              <Input type="text" id="formTelefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Label for="formEmail">Email</Label>
              <Input type="email" id="formEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button color="primary" onClick={handleGuardarEstudiante}>
            Guardar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default EstudianteModal;
