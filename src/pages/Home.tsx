import * as React from 'react';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return(

        <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',}}>
            <div style={{
                width:'800px',
                flexDirection:'column',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center'}}>

                <h1>
                    ¡Bienvenido a la Biblioteca Virtual!
                </h1>
                <h2>
                    Aqui encontrarás una amplia variedad de libros. Nuestro objetivo es proporcionar acceso a la literatura
                    y fomentar la educación y el aprendizaje continuo.
                    Navega a traves de nuestras categorías de libros para encontrar obras de ficción,
                    no ficción, literatura clásica, poesía, ciencia, tecnología, arte y mucho más.
                    Tambien puedes buscar por autor, título o palabra clave.
                    Si eres un amante de la lectura y quieres expendir tus horizontes literarios,
                    ¡has venido al lugar correcto!¡Explora nuestra colección de libros y descarga tus favoritos hoy mismo!
                </h2>
            </div>


        </div>






    );
};

export default App;
