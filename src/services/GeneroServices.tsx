import axios from "axios";

// GeneroLibroType
export interface GeneroLibroType {
    id: number;
    descripcion: string;
  }

  const URI = "http://localhost:8080";

  // Funciones CRUD para el modelo GeneroLibro
export async function getGenerosLibro(): Promise<GeneroLibroType[]> {
    const response = await axios.get<GeneroLibroType[]>(`${URI}/api/generoslibro`);
    console.log(response.data);
    return response.data;
  }
  
  export async function addGeneroLibro(genero: string): Promise<GeneroLibroType> {
    const response = await axios.post<GeneroLibroType>(
      `${URI}/api/generoslibro`,
      { descripcion: genero }
    );
    return response.data;
  }
