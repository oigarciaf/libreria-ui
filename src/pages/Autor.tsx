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

    const [autores, setAutores] = useState<AutorType[]>([]);
    const [autor, setAutor] = useState<string>("");  
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingAutor, setEditingAutor] = useState<string>("");
 


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutor(e.target.value);
    }

    const addAutorEvent = async () => {
        const newAutor = await addAutor(autor);
        setAutores([...autores, newAutor]);
        setAutor("");
    }

    const deleteAutorEvent = async (id: number) => {
        await deleteAutor(id);
        setAutores(autores.filter((autor) => autor.id !== id));
    }

    const startEditing = (id: number, descripcion: string) => {
        if(editingId === null){
            setEditingId(id);
            setEditingAutor(descripcion);
            setAutor(descripcion);
        }
       
    }

    const cancelEditing = () => {
        setEditingId(null);
        setEditingAutor("");
        setAutor("");
    }

    const updateAutorEvent = async () => {
        if (editingId !== null) {
            await updateAutor(editingId, autor);
            setAutores(
                autores.map((c) => {
                if (c.id === editingId) {
                    return { ...c, descripcion: autor };
                } else {
                    return c;
                }
            }));
            setEditingId(null);
            setEditingAutor("");
            setAutor("");
        }
    }
    
    useEffect(() => {
        async function fetchData() {
            
            const x = await getAutores();
            setAutores(x);
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
                    <button onClick={updateAutorEvent}>Update</button>
                    <button onClick={cancelEditing}>Cancel</button>
                </div>
            )}

            <ul>
                { autores.map((autor) => (
                    <li key={autor.id} >
                        {editingId === autor.id ?  (
                            <input
                             type="text"
                             value = {editingAutor} 
                             onChange = {(e) => setEditingAutor(e.target.value)}
                             />
                        ) : (autor.descripcion)} 

                        <button onClick={
                            () => deleteAutorEvent(autor.id)} disabled = {editingId !== null}
                         >
                            Remove
                        </button>
                        <button onClick={() => startEditing(autor.id, autor.descripcion)} disabled={editingId !== null}>
                            Edit
                            </button>
                        
                        
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Autor;
