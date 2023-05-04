import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import { 
    GeneroLibroType
    , getGenerosLibro
    , addGeneroLibro
    , deleteGeneroLibro
    , updateGeneroLibro
 } from "../services/GeneroServices"


function GeneroLibro() {

    const [generos, setGeneros] = useState<GeneroLibroType[]>([]);
    const [genero, setGenero] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGenero(e.target.value);
    }

    const addGeneroEvent = async () => {
        const newGenero = await addGeneroLibro(genero);
        setGeneros([...generos, newGenero]);
        setGenero("");
    }

    const deleteGeneroEvent = async (id: number) => {
        await deleteGeneroLibro(id);
        setGeneros(generos.filter((genero) => genero.id !== id));
    }

    const startEditGenero = (id: number, descripcion: string) => {
        setIsUpdating(true);
        setGenero(descripcion);
        setId(id);
    }

    const stopEditGenero = () => {
        setIsUpdating(false);
        setGenero("");
    }

    const updateGeneroEvent = async () => {
        const newGenero = await updateGeneroLibro(id, genero);
        setGeneros(generos.map((genero) => genero.id === id ? newGenero : genero));
        setIsUpdating(false);
        setGenero("");
    }

    useEffect(() => {
        async function fetchData() {
            
            const x = await getGenerosLibro();
            setGeneros(x);
        };
        fetchData();
    }, []);

    return (
        <div>
        <h1>Generos Management</h1>

            <span>Generos: </span>
            <input 
                type="text" 
                placeholder="Type your new genero"
                value={genero}
                onChange={changeInput}
            />
            <button
                disabled={ genero.length == 0 }
                onClick={ isUpdating ? updateGeneroEvent : addGeneroEvent }
            >
                { isUpdating ? "Update" : "Add" }
            </button>
            
            { 
                isUpdating && 
                <button
                    onClick={stopEditGenero}
                >
                    Cancel
                </button>
            }
            


            <ul>
                { generos.map((genero) => (
                    <li key={genero.id} >
                        { genero.descripcion }
                        <button 
                            onClick={
                                () => deleteGeneroEvent(genero.id)
                            }
                            disabled={isUpdating}
                        >
                            Remove
                        </button>
                        <button
                            disabled={isUpdating}
                            onClick={
                                () => startEditGenero(genero.id, genero.descripcion)
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

export default GeneroLibro;