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
    , updateAutor
 } from "../services/AutorServices"


function Autor() {

    const [autores, setAutores] = useState<AutorType[]>([]);
    const [autor, setAutor] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutor(e.target.value);
    }

    const addAutorEvent = async () => {
        const newAutor = await addAutor(autor);
        setAutores([...autores, newAutor]);
        setAutor("");
    }

    const deleteIdiomaEvent = async (id: number) => {
        await deleteAutor(id);
        setAutores(autores.filter((autor) => autor.id !== id));
    }

    const startEditIdioma = (id: number, descripcion: string) => {
        setIsUpdating(true);
        setAutor(descripcion);
        setId(id);
    }

    const stopEditAutor = () => {
        setIsUpdating(false);
        setAutor("");
    }

    const updateAutorEvent = async () => {
        const newAutor = await updateAutor(id, autor);
        setAutores(autores.map((autor) => autor.id === id ? newAutor : autor));
        setIsUpdating(false);
        setAutor("");
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
        <h1>Autor Management</h1>

            <span>Autor: </span>
            <input 
                type="text" 
                placeholder="Type your new autor"
                value={autor}
                onChange={changeInput}
            />
            <button
                disabled={ autor.length == 0 }
                onClick={ isUpdating ? updateAutorEvent : addAutorEvent }
            >
                { isUpdating ? "Update" : "Add" }
            </button>
            
            { 
                isUpdating && 
                <button
                    onClick={stopEditAutor}
                >
                    Cancel
                </button>
            }
            


            <ul>
                { autores.map((autor) => (
                    <li key={autor.id} >
                        { autor.descripcion }
                        <button 
                            onClick={
                                () => deleteIdiomaEvent(autor.id)
                            }
                            disabled={isUpdating}
                        >
                            Remove
                        </button>
                        <button
                            disabled={isUpdating}
                            onClick={
                                () => startEditIdioma(autor.id, autor.descripcion)
                            }
                        >
                            Edit
                        </button>
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Autor;