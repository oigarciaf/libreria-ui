
import axios from "axios";
// EditorialType
export interface EditorialType {
    id: number;
    descripcion: string;
  }

const URI = "http://localhost:8000";

// Funciones CRUD para el modelo Editorial
export async function getEditoriales(): Promise<EditorialType[]> {
    const response = await axios.get<EditorialType[]>(
      `${URI}/api/editorial`
      );console.log(response.data);
    return response.data;
  }
  
  export async function addEditorial(editorial: string): Promise<EditorialType> {
    const response = await axios.post<EditorialType>(
      `${URI}/api/editorial`,
      { descripcion: editorial }
    );
    return response.data;
  }

  export async function deleteEditorial(id: number): Promise<void> {
    await axios.delete<void>(
      `${URI}/api/editorial/${id}`
    );
  }

  export async function updateEditorial(id: number, editorial: string): Promise<EditorialType> {
    const response = await axios.put<EditorialType>(
      `${URI}/api/editorial/${id}`
      , { descripcion: editorial } // body or payload
    );
    return response.data;
  }