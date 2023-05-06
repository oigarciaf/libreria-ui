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

            <span>Idioma: </span>
            <input 
                type="text" 
                placeholder="Type your new idioma"
                value={idioma}
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
            


            <ul style={{listStyleType:"none"}}>
                { idiomas.map((idioma) => (
                    <li key={idioma.id} >
                        <div style={{backgroundColor:"#cce5ff",
                                    margin:"10px",
                                    padding:"10px",
                                    borderRadius:"5px",
                                    display:"flex",
                                    justifyContent:"space-between"
                                    }}>
                            { idioma.descripcion }
                            <div>
                                <button style={{backgroundColor:"#FFC400"
                                                , border:"none"
                                                ,borderRadius:"5px"
                                                ,height:"30px"
                                                ,width:"60px"
                                                ,marginRight:"20px"}}
                                    disabled={isUpdating}
                                    onClick={
                                        () => startEditIdioma(idioma.id, idioma.descripcion)
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
                                        () => deleteIdiomaEvent(idioma.id)
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

export default Idioma;



