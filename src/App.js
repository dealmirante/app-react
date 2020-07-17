import React from 'react';
import ListadoPersonajes from './components/ListadoPersonajes';

function App() {
  return (

    <div className='container'>

      <h1> Proyecto en React </h1>

      <h2> Start Wars Personajes Api </h2>

      <ListadoPersonajes dePrueba = "Hoy es el dia 119 de la cuarentena" >
        <h3> Hola mundo, esto es un children </h3>
        <h3> Hola mundo, esto es otro children </h3>
      </ListadoPersonajes>

    </div>
  );
}
export default App;
