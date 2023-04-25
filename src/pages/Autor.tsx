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
    const [editingId, setEditingId] = useState<number | null>(null);// Estado para el ID del autor que se está editando
    const [editingAutor, setEditingAutor] = useState<string>("");// Estado para el nombre del autor que se está editando
 


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutor(e.target.value);
    }

    const addAutorEvent = async () => {
        const newAutor = await addAutor(autor); // Agrega un nuevo autor
        setAutores([...autores, newAutor]); // Actualiza la lista de autores con el nuevo autor agregado
        setAutor(""); // Limpia el campo de entrada del autor
    }

    const deleteAutorEvent = async (id: number) => {
        await deleteAutor(id); // Elimina el autor con el ID especificado
        setAutores(autores.filter((autor) => autor.id !== id));  // Actualiza la lista de autores eliminando el autor eliminado
    }

    const startEditing = (id: number, descripcion: string) => {
        if(editingId === null){
            setEditingId(id); // Establece el ID del autor que se está editando
            setEditingAutor(descripcion); // Establece el nombre del autor que se está editando
            setAutor(descripcion); // Establece el nombre del autor en el campo de entrada
        }
       
    }

    const cancelEditing = () => {
        setEditingId(null); // Limpia el ID del autor que se está editando
        setEditingAutor(""); // Limpia el nombre del autor que se está editando
        setAutor(""); // Limpia el campo de entrada del autor
    }

    const updateAutorEvent = async () => {
        if (editingId !== null) {
            await updateAutor(editingId, autor); // Actualiza el autor con el ID y nombre especificados
            setAutores(
                autores.map((a) => {
                if (a.id === editingId) {
                    return { ...a, descripcion: autor }; // Actualiza el nombre del autor en la lista de autores
                } else {
                    return a;
                }
            }));
            setEditingId(null); // Limpia el ID del autor que se está editando
            setEditingAutor(""); // Limpia el nombre del autor que se está editando
            setAutor(""); // Limpia el campo de entrada del autor
        }
    }
    
    useEffect(() => {
        async function fetchData() {
            
            const x = await getAutores(); // Obtiene la lista de autores
            setAutores(x); // Actualiza la lista de autores con los datos obtenidos
        };
        fetchData();
    }, []);

    return (
        <div>
        <h1>Agreagar un nuevo autor</h1>

            <span>Autor: </span>
            <input 
                type="text" 
                placeholder="Registra un Autor"
                value={autor}
                onChange={changeInput}
            />
            {editingId === null ? (
                 <button
                 disabled={ autor.length === 0 }
                 onClick={addAutorEvent}>
                 Add
                </button>
                
            ): (
                <div>
                    <button 
                        onClick={updateAutorEvent}>
                        Update
                    </button>
                    <button 
                        onClick={cancelEditing}>
                        Cancel
                    </button>
                </div>
            )}

            <ul>
                { autores.map((autor) => (
                    <li key={autor.id} >
                        {editingId === autor.id ?  (
                            <input
                             value = {editingAutor} 
                             onChange = {(e) => setEditingAutor(e.target.value)}
                             />
                        ) : (autor.descripcion)} 

                        <button onClick={
                            () => deleteAutorEvent(autor.id)} disabled = {editingId === (0) }
                         >
                            Remove
                        </button>
                        <button onClick={() => startEditing(autor.id, autor.descripcion)} disabled={editingId === (0)}>
                            Edit
                            </button>
                        
                        
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Autor;
