import {
    LibroType
    , getLibro
    , addLibro
    , deleteLibro
    , updateLibro
  } from "../services/LibroServices"
  
  import {
    EditorialType,
    getEditoriales,
    addEditorial,
  } from "../services/LibroServices";
  
  import {
    GeneroLibroType,
    getGenerosLibro,
    addGeneroLibro,
  } from "../services/LibroServices";
  
  import {
    IdiomaType,
    getIdiomas,
    addIdioma,
  } from "../services/LibroServices";
  
  
  function Libro() {
    const [autores, setAutores] = useState<AutorType[]>([]);
    const [editoriales, setEditoriales] = useState<EditorialType[]>([]);
    const [generosLibro, setGenerosLibro] = useState<GeneroLibroType[]>([]);
    const [idiomas, setIdiomas] = useState<IdiomaType[]>([]);
    const [libro, setLibro] = useState<LibroType>({
      id: 0,
      id_autor: 0,
      id_editorial: 0,
      id_genero_libro: 0,
      id_idioma: 0,
      codigo: "",
      titulo: "",
      edicion: 0,
      year_publicacion: 0,
      imagen: File,
      resumen: ""
    });
  
    const [editingId, setEditingId] = useState<number | null>(null);// Estado para el ID del libro que se está editando
      const [editingLibro, setEditingLibro] = useState<LibroType>({
          id: 0,
          id_autor: 0,
          id_editorial: 0,
          id_genero_libro: 0,
          id_idioma: 0,
          codigo: "",
          titulo: "",
          edicion: 0,
          year_publicacion: 0,
          imagen: file,
          resumen: ""
      }); // Estado para el libro que se está editando
   