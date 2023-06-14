import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola! Bienvenido a CompuGarza. Aquí tienes algunos productos que te pueden llegar a gustar." />
    </div>
  );
}

export default App;
