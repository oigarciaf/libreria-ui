// IdiomaType
import axios from "axios";
export interface IdiomaType {
    id: number;
    descripcion: string;
  }
  const URI = "http://localhost:8080";


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