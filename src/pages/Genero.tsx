import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import { 
    GeneroType
    , getGeneros
    , addGenero

} from "../services/GeneroService"


function Genero() {

    const [generos, setGeneros] = useState<GeneroType[]>([]);
    const [genero, setGenero] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGenero(e.target.value);
    }

    const addGeneroEvent = async () => {
        const newGenero = await addGenero(genero);
        setGeneros([...generos, newGenero]);
        setGenero("");
    }

    // const deleteColorEvent = async (id: number) => {
    //     await deleteColor(id);
    //     setColors(colors.filter((color) => color.id !== id));
    // }

    // const startEditColor = (id: number, descripcion: string) => {
    //     setIsUpdating(true);
    //     setColor(descripcion);
    //     setId(id);
    // }

    // const stopEditColor = () => {
    //     setIsUpdating(false);
    //     setColor("");
    // }

    // const updateGeneroEvent = async () => {
    //     const newGenero = await updateGenero(id, genero);
    //     setGeneros(generos.map((genero) => genero.id === id ? newGenero : genero));
    //     setIsUpdating(false);
    //     setGenero("");
    // }

    useEffect(() => {
        async function fetchData() {
            
            const x = await getGeneros();
            setGeneros(x);
        };
        fetchData();
    }, []);

    return (
        <div>
        <h1>Agregar un nuevo Genero Literario</h1>

            <span>Genero: </span>
            <input 
                type="text" 
                placeholder="Registrar un nuevo genero"
                value={genero}
                onChange={changeInput}
            />
            <button
                disabled={ genero.length == 0 }
                onClick={ addGeneroEvent }
                // onClick={ isUpdating ? updateColorEvent : addColorEvent }
            >
                Add
                {/* { isUpdating ? "Update" : "Add" } */}
            </button>
            
            {/* { 
                isUpdating && 
                <button
                    // onClick={stopEditColor}
                >
                    Cancel
                </button>
            }
             */}


            <ul>
                { generos.map((genero) => (
                    <li key={genero.id} >
                        { genero.descripcion }
                        {/* <button 
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
                        </button> */}
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Genero;