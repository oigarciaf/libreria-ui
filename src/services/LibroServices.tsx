import axios from "axios";

export interface LibroType {
  id: number;
  id_autor: number;
  id_editorial: number;
  id_genero_libro: number;
  id_idioma: number;
  titulo: string;
  edicion: number;
  year_publicacion: number;
  imagen: string;
  resumen: string;
}

const URI = "http://localhost:8080";

export async function getLibro(): Promise<LibroType[]> {
  const response = await axios.get<LibroType[]>(
    `${URI}/api/libros`
  );
  console.log(response.data);
  return response.data;
}

export async function addLibro(libro: LibroType): Promise<LibroType> {
  const response = await axios.post<LibroType>(
  `${URI}/api/libros`, libro
  );
  return response.data;
}

export async function deleteLibro(id: number): Promise<void> {
  await axios.delete<void>(
  `${URI}/api/libros/${id}`
   );
}

export async function updateLibro(id: number, libro: LibroType): Promise<LibroType> {
  const response = await axios.put<LibroType>(
    `${URI}/api/libros/${id}`, libro
     );
  return response.data;
}
