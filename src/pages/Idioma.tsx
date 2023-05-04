import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import { 
    IdiomaType
    , getIdiomas
    , addIdioma
    , deleteIdioma
    , updateIdioma
 } from "../services/IdiomaServices"


function Idioma() {

    const [idiomas, setIdiomas] = useState<IdiomaType[]>([]);
    const [idioma, setIdioma] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdioma(e.target.value);
    }

    const addIdiomaEvent = async () => {
        const newIdioma = await addIdioma(idioma);
        setIdiomas([...idiomas, newIdioma]);
        setIdioma("");
    }

    const deleteIdiomaEvent = async (id: number) => {
        await deleteIdioma(id);
        setIdiomas(idiomas.filter((idioma) => idioma.id !== id));
    }

    const startEditIdioma = (id: number, descripcion: string) => {
        setIsUpdating(true);
        setIdioma(descripcion);
        setId(id);
    }

    const stopEditIdioma = () => {
        setIsUpdating(false);
        setIdioma("");
    }

    const updateIdiomaEvent = async () => {
        const newIdioma = await updateIdioma(id, idioma);
        setIdiomas(idiomas.map((idioma) => idioma.id === id ? newIdioma : idioma));
        setIsUpdating(false);
        setIdioma("");
    }

    useEffect(() => {
        async function fetchData() {
            
            const x = await getIdiomas();
            setIdiomas(x);
        };
        fetchData();
    }, []);

    return (
        <div>
        <h1>Idioma Management</h1>

            <span>Idioma: </span>
            <input 
                type="text" 
                placeholder="Type your new idioma"
                value={idioma}
                onChange={changeInput}
            />
            <button
                disabled={ idioma.length == 0 }
                onClick={ isUpdating ? updateIdiomaEvent : addIdiomaEvent }
            >
                { isUpdating ? "Update" : "Add" }
            </button>
            
            { 
                isUpdating && 
                <button
                    onClick={stopEditIdioma}
                >
                    Cancel
                </button>
            }
            


            <ul>
                { idiomas.map((idioma) => (
                    <li key={idioma.id} >
                        { idioma.descripcion }
                        <button 
                            onClick={
                                () => deleteIdiomaEvent(idioma.id)
                            }
                            disabled={isUpdating}
                        >
                            Remove
                        </button>
                        <button
                            disabled={isUpdating}
                            onClick={
                                () => startEditIdioma(idioma.id, idioma.descripcion)
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

export default Idioma;



