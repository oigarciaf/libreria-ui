import axios from "axios";

export interface GeneroType {
    id: number;
    descripcion: string;
}

const URI = "http://localhost:8000"


export async function getGeneros(): Promise<GeneroType[]> {
    const response = await axios.get<GeneroType[]>(
        `${URI}/api/generos`
    );
    return response.data;
}

export async function addGenero(genero: string): Promise<GeneroType> {
    const response = await axios.post<GeneroType>(
        `${URI}/api/generos`
        , { descripcion: genero } // body or payload
    );
    return response.data;
}
// import axios from "axios";

// export interface ColorType {
//     id: number;
//     descripcion: string;
// }

// const URI = "http://localhost:8080"


// export async function getColors(): Promise<ColorType[]> {
//     const response = await axios.get<ColorType[]>(
//         `${URI}/api/colores`
//     );
//     return response.data;
// }

// export async function addColor(color: string): Promise<ColorType> {
//     const response = await axios.post<ColorType>(
//         `${URI}/api/colores`
//         , { descripcion: color } // body or payload
//     );
//     return response.data;
// }