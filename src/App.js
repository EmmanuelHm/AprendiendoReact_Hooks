import React from 'react';

// import Contador from './components/Contador'
// import Jsx from './components/Jsx'
// import Lista from './components/Lista'
// import Formulario from './components/Formulario'
// import FormHook from './components/FormHook'
// import EjemploUno from './components/EjemploUno'
// import Saludo from './components/props/Saludo'
import Comentario from './components/props/Comentario'

function App() {

  const sujeto = {
    nombre: "Pedrito",
    urlImagen: "https://via.placeholder.com/64",
    texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  }

  return (
    <div className="container mt-5">

      <h1>React JS Curso</h1>
      <hr/>

      {/* <Contador /> */}
      {/* <Jsx /> */}
      {/* <Lista /> */}
      {/* <Formulario /> */}
      {/* <FormHook /> */}
      {/* <EjemploUno /> */}

      {/* PROPS EN REACT */}
        {/* <Saludo persona="Juanito" />
        <Saludo persona="Ignacio" />
        <Saludo persona="Catalina" /> */}
        <Comentario sujeto={sujeto} />

    </div>
  );
}

export default App;
