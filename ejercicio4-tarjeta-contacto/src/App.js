import React from 'react';
import TarjetaContacto from './componentes/tarjetaContacto';

function App() {

  const contacto = {
    nombre: "Ana Ibarra",
    email: "anagabrielibarra58@gmail.com",
    telefono: "XXXXXXXXXXXXX",
    direccion: {
      calle: "Calle Falsa 123",
      ciudad: "Capilla del Monte"
    }
  };

  return (
    <div>
      <TarjetaContacto contacto={contacto} />
    </div>
  );
}

export default App;
