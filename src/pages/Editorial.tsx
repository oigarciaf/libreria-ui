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

            <span>Editorial: </span>
            <input 
                type="text" 
                placeholder="Type your new editorial"
                value={editorial}
                onChange={changeInput}
            />
            <button style={{backgroundColor:"#66CC00"
                            ,color:"white"
                            ,border:"none"
                            ,borderRadius:"5px"
                            ,height:"30px"
                            ,width:"80px"
                            ,marginLeft:"10px"
                            ,marginRight:"10px"}}
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
            


            <ul style={{listStyleType:"none"}}>
                { editoriales.map((editorial) => (
                    <li key={editorial.id} >
                        <div style={{backgroundColor:"#cce5ff",
                                    margin:"10px",
                                    padding:"10px",
                                    borderRadius:"5px",
                                    display:"flex",
                                    justifyContent:"space-between"
                                    }}>
                        { editorial.descripcion }
                            <div>
                                <button style={{backgroundColor:"#FFC400"
                                                , border:"none"
                                                ,borderRadius:"5px"
                                                ,height:"30px"
                                                ,width:"60px"
                                                ,marginRight:"20px"}}
                                    disabled={isUpdating}
                                    onClick={
                                        () => startEditEditorial(editorial.id, editorial.descripcion)
                                    }
                                >
                                    Edit
                                </button>
                                <button style={{backgroundColor:"#FF0000"
                                                ,color:"white"
                                                , border:"none"
                                                ,borderRadius:"5px"
                                                ,height:"30px"
                                                ,width:"90px"}}
                                    onClick={
                                        () => deleteEditorialEvent(editorial.id)
                                    }
                                    disabled={isUpdating}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </li>
                    
                ))}
            </ul>

        </div>
    );
}

export default Editorial;