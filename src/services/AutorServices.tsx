import axios from "axios";

export interface AutorType {
    id: number;
    descripcion: string;
    id_idioma: number;
}

const URI = "http://localhost:8000"
  
export async function getAutores(): Promise<AutorType[]> {
    const response = await axios.get<AutorType[]>(
        `${URI}/api/autores`
    );
    console.log(response.data);
    return response.data;
    
}

export async function addAutor(autor: string, idioma:string): Promise<AutorType> {
    const response = await axios.post<AutorType>(
        `${URI}/api/autores`
        , { descripcion: autor, id_idioma:idioma} // body or payload
    );
    return response.data;
}

export async function deleteAutor(id: number): Promise<void> {
    await axios.delete<void>(
        `${URI}/api/autores/${id}`
    );
}

export async function updateAutor(id: number, autor:string, idioma:string): Promise<AutorType> {
    const response = await axios.put<AutorType>(
        `${URI}/api/autores/${id}`
        , { descripcion: autor , id_idioma:idioma} // body or payload
    );
    return response.data;
}
