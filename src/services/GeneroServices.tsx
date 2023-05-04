import axios from "axios";

// GeneroLibroType
export interface GeneroLibroType {
    id: number;
    descripcion: string;
  }

  const URI = "http://localhost:8000";

  // Funciones CRUD para el modelo GeneroLibro
export async function getGenerosLibro(): Promise<GeneroLibroType[]> {
    const response = await axios.get<GeneroLibroType[]>(
      `${URI}/api/generos`
      );
    console.log(response.data);
    return response.data;
  }
  
  export async function addGeneroLibro(genero: string): Promise<GeneroLibroType> {
    const response = await axios.post<GeneroLibroType>(
      `${URI}/api/generos`,
      { descripcion: genero }
    );
    return response.data;
  }

  export async function deleteGeneroLibro(id: number): Promise<void> {
    await axios.delete<void>(
      `${URI}/api/generos/${id}`
    );
  }

  export async function updateGeneroLibro(id: number, generoLibro: string): Promise<GeneroLibroType> {
    const response = await axios.put<GeneroLibroType>(
      `${URI}/api/generos/${id}`
      , { descripcion: generoLibro } // body or payload
    );
    return response.data;
  }