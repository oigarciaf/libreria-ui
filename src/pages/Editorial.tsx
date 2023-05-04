import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import { 
    EditorialType
    , getEditoriales
    , addEditorial
    , deleteEditorial
    , updateEditorial
 } from "../services/EditorialServices"


function Editorial() {

    const [editoriales, setEditoriales] = useState<EditorialType[]>([]);
    const [editorial, setEditorial] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);


    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditorial(e.target.value);
    }

    const addEditorialEvent = async () => {
        const newEditorial = await addEditorial(editorial);
        setEditoriales([...editoriales, newEditorial]);
        setEditorial("");
    }
    useEffect(() => {
        async function fetchData() {
            
            const x = await getEditoriales(); // Obtiene la lista de autores
            setEditoriales(x); // Actualiza la lista de autores con los datos obtenidos
        };
        fetchData();
    }, []);


    const deleteEditorialEvent = async (id: number) => {
        await deleteEditorial(id);
        setEditoriales(editoriales.filter((editorial) => editorial.id !== id));
    }

    const startEditEditorial = (id: number, descripcion: string) => {
        setIsUpdating(true);
        setEditorial(descripcion);
        setId(id);
    }

    const stopEditEditorial = () => {
        setIsUpdating(false);
        setEditorial("");
    }

    const updateEditorialEvent = async () => {
        const newEditorial = await updateEditorial(id, editorial);
        setEditoriales(editoriales.map((editorial) => editorial.id === id ? newEditorial : editorial));
        setIsUpdating(false);
        setEditorial("");
    }

    useEffect(() => {
        async function fetchData() {
            
            const x = await getEditoriales();
            setEditoriales(x);
        };
        fetchData();
    }, []);

    return (
        <div>
        <h1>Editoriales Management</h1>

            <span>Editorial: </span>
            <input 
                type="text" 
                placeholder="Type your new editorial"
                value={editorial}
                onChange={changeInput}
            />
            <button
                disabled={ editorial.length == 0 }
                onClick={ isUpdating ? updateEditorialEvent : addEditorialEvent }
            >
                { isUpdating ? "Update" : "Add" }
            </button>
            
            { 
                isUpdating && 
                <button
                    onClick={stopEditEditorial}
                >
                    Cancel
                </button>
            }
            


            <ul>
                { editoriales.map((editorial) => (
                    <li key={editorial.id} >
                        { editorial.descripcion }
                        <button 
                            onClick={
                                () => deleteEditorialEvent(editorial.id)
                            }
                            disabled={isUpdating}
                        >
                            Remove
                        </button>
                        <button
                            disabled={isUpdating}
                            onClick={
                                () => startEditEditorial(editorial.id, editorial.descripcion)
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

export default Editorial;