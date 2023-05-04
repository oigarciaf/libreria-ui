// IdiomaType
import axios from "axios";
import Idioma from "../pages/Idioma";
export interface IdiomaType {
    id: number;
    descripcion: string;
  }
  const URI = "http://localhost:8000";


// Funciones CRUD para el modelo idioma 
export async function getIdiomas(): Promise<IdiomaType[]> {
  const response = await axios.get<IdiomaType[]>(
      `${URI}/api/idiomas`
  );
  console.log(response.data);
  return response.data;
}
export async function addIdioma(idioma: string): Promise<IdiomaType> {
  const response = await axios.post<IdiomaType>(
      `${URI}/api/idiomas`
      , { descripcion: idioma}
  );
  return response.data;
}

export async function deleteIdioma(id: number): Promise<void> {
  await axios.delete<void>(
    `${URI}/api/idiomas/${id}`
  );
}

export async function updateIdioma(id: number, idioma: string): Promise<IdiomaType> {
  const response = await axios.put<IdiomaType>(
    `${URI}/api/idiomas/${id}`
    , { descripcion: idioma } // body or payload
  );
  return response.data;
}