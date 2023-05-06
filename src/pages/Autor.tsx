import React from "react";
import axios from "axios";

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

import {
    IdiomaType,
    getIdiomas,
} from "../services/IdiomaServices";


function Autor() {

    const [autores, setAutores] = useState<AutorType[]>([]);
    const [autor, setAutor] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [idiomaSeleccionado, setIdiomaSeleccionado] = useState("");
    const [idiomas, setIdiomas] = useState<IdiomaType[]>([]);

    // llamamos a setAutor para actualizarlo con el valor que se escriba en el input
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAutor(e.target.value);
    }
    
    // funcion para crear un autor
    const addAutorEvent = async () => {
        const newAutor = await addAutor(autor, idiomaSeleccionado);
        setAutores([...autores, newAutor]);
        setAutor("");
    };  
    
    // funcion para actualizar un autor
    const updateAutorEvent = async () => {
        const newAutor = await updateAutor(id, autor, idiomaSeleccionado);
        setAutores(autores.map((autor) => (autor.id === id ? newAutor : autor)));
        setIsUpdating(false);
        setAutor("");
    };  

    // funcion para borrar un autor
    const deleteAutorEvent = async (id: number) => {
        await deleteAutor(id);
        setAutores(autores.filter((autor) => autor.id !== id));
    }
    
    const startEditAutor = (id: number, descripcion: string) => {
        setIsUpdating(true);
        setAutor(descripcion);
        setId(id);
    }
    
    const stopEditAutor = () => {
        setIsUpdating(false);
        setAutor("");
    }


// cargamos con useEffect los idiomas disponibles
// y luego se utiliza "setIdiomas" para actualizar el estado con los idiomas obtenidos.
    useEffect(() => {
            async function fetchData() {
            const idiomas = await getIdiomas();
            setIdiomas(idiomas);
            }
            fetchData();
    }, []);


    useEffect(() => {
        async function fetchData() {
            
            const x = await getAutores();
            setAutores(x);
        };
        fetchData();
    }, []);

    return (
        <div>
            <span>Autor: </span>
            <input 
                type="text" 
                placeholder="Type your new autor"
                value={autor}
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
            <div>
                <label>Idioma: </label>
                <select
                    value={idiomaSeleccionado}
                    onChange={(e) => setIdiomaSeleccionado(e.target.value)}
                    >
                    {/* mapeamos los idiomas para obtener la descripcion de cada uno */}
                    <option value="">Selecciona un idioma</option>
                    {idiomas.map((idioma) => (
                    <option key={idioma.id} value={idioma.id}>
                        {idioma.descripcion}
                    </option>
                    ))}
                </select>
            </div>
            


            <ul style={{listStyleType:"none"}}>
                { autores.map((autor) => (
                    <li key={autor.id} >
                        <div style={{backgroundColor:"#cce5ff",
                                    margin:"10px",
                                    padding:"10px",
                                    borderRadius:"5px",
                                    display:"flex",
                                    justifyContent:"space-between"
                                    }}>

                                    <div>
                                        {/* mandamos a imprimir el nombre del autor */}
                                        { autor.descripcion }
                                        {/* Buscamos en array de idiomas un id que sea igual al id_idioma del autor
                                        y con el operador ternario, si encuentra la igualdad imprime la descripcion del idioma
                                        y si no pues se imprime un string vacio */}
                                        <p>Idioma: {idiomas.find((i) => 
                                                    i.id === autor.id_idioma)?.descripcion || ''
                                                    }
                                        </p>
                                    </div>

                                    
                                    <div>
                                    { autor.id_idioma }
                                        <button style={{backgroundColor:"#FFC400"
                                                        , border:"none"
                                                        ,borderRadius:"5px"
                                                        ,height:"30px"
                                                        ,width:"60px"
                                                        ,marginRight:"20px"}}
                                            disabled={isUpdating}
                                            onClick={
                                                () => startEditAutor(autor.id, autor.descripcion)
                                            }>
                                            Edit
                                        </button>
                                        <button  style={{backgroundColor:"#FF0000"
                                                        ,color:"white"
                                                        , border:"none"
                                                        ,borderRadius:"5px"
                                                        ,height:"30px"
                                                        ,width:"90px"}}
                                            onClick={
                                                () => deleteAutorEvent(autor.id)
                                            }
                                            disabled={isUpdating}>
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

export default Autor;



