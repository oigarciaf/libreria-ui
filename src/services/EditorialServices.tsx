
import axios from "axios";
// EditorialType
export interface EditorialType {
    id: number;
    descripcion: string;
  }

const URI = "http://localhost:8080";

// Funciones CRUD para el modelo Editorial
export async function getEditoriales(): Promise<EditorialType[]> {
    const response = await axios.get<EditorialType[]>(
      `${URI}/api/editoriales`
      );console.log(response.data);
    return response.data;
  }
  
  export async function addEditorial(editorial: string): Promise<EditorialType> {
    const response = await axios.post<EditorialType>(
      `${URI}/api/editoriales`,
      { descripcion: editorial }
    );
    return response.data;
  }
  