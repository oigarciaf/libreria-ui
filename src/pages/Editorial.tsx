import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import { 
    AutorType
    , getAutores
    , addAutor
    , deleteAutor
    ,updateAutor
 } from "../services/AutorServices"

function Autor() {

    const [autores, setAutores] = useState<AutorType[]>([]); // Estado para almacenar los autores
    const [autor, setAutor] = useState<string>("");  // Estado para el autor actual que se está agregando o editando

    
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutor(e.target.value);
    }

    const addAutorEvent = async () => {
        const newAutor = await addAutor(autor); // Agrega un nuevo autor
        setAutores([...autores, newAutor]); // Actualiza la lista de autores con el nuevo autor agregado
        setAutor(""); // Limpia el campo de entrada del autor
    }

    return(
        <></>
)
}
export default Autor;