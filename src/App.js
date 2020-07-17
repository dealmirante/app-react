import React from 'react';
import ListadoPersonajes from './components/ListadoPersonajes';

function App() {
  return (

    <React.Fragment>
      <h1> Hola Mundo </h1>

      <ListadoPersonajes dePrueba = "Hoy es el dia 119 de la cuarentena" >
        <h3> Hola mundo, esto es un children </h3>
        <h3> Hola mundo, esto es otro children </h3>
      </ListadoPersonajes>

    </React.Fragment>
  );
}
export default App;
