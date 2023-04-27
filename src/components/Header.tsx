import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Libro from '../pages/Libro';
import Autor from '../pages/Autor';
import Home from '../pages/Home';
import Genero from '../pages/Genero';




function OffcanvasExample() {
    return (
        <>
        <Router>
        {['xl'].map((expand) => (
            <Navbar bg="light" expand={expand} className="mb-3" >
            <Container fluid style={{backgroundColor:"#ffffff"}}>
                <Navbar.Brand href="#">Sistema Bibliotecario</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Sistema Bibliotecario
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link style={{backgroundColor:"#e6ffe6"}} className='btn' to="/home">Home</Link>
                    <Link style={{backgroundColor:"#e6f2ff"}} className='btn' to="/libros">Libros</Link>

                    <NavDropdown
                        style={{flexDirection:'column'}}
                        title="Creación"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                        <Link style={{backgroundColor:"#e6e6ff"}} className='btn' to="/autor">Autores</Link>
                        <NavDropdown.Divider />
                        <Link style={{backgroundColor:"#ffffe6"}} className='btn' to="#">Editoriales</Link>
                        <NavDropdown.Divider />
                        <Link style={{backgroundColor:"#ffe6e6"}} className='btn' to="/generos">Generos Literarios</Link>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        Comentarios
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
            
        ))}
            <Routes>
                <Route path="/autor" element={<Autor />} />
                <Route path="/home" element={<Home />} />
                <Route path="/libros" element={<Libro />} />
                <Route path="/generos" element={<Genero />} />
            </Routes>
        </Router>
        </>
    );
}

export default OffcanvasExample;