import axios from "axios";

export interface AutorType {
    id: number;
    descripcion: string;
}

const URI = "http://localhost:8080"


export async function getAutores(): Promise<AutorType[]> {
    const response = await axios.get<AutorType[]>(
        `${URI}/api/autores`
    );
    console.log(response.data);
    return response.data;
    
}

export async function addAutor(autor: string): Promise<AutorType> {
    const response = await axios.post<AutorType>(
        `${URI}/api/autores`
        , { descripcion: autor} // body or payload
    );
    return response.data;
}

export async function deleteAutor(id: number): Promise<void> {
    await axios.delete<void>(
        `${URI}/api/autores/${id}`
    );
}

export async function updateAutor(id: number, autor:string): Promise<AutorType> {
    const response = await axios.put<AutorType>(
        `${URI}/api/autores/${id}`
        , { descripcion: autor } // body or payload
    );
    return response.data;
}
