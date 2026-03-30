import './App.css';
import CatalogoTienda from './componentes/CatalogoTienda';

function App() {

  const catalogoProductos = [
    {
      id: 1,
      nombre: "Almohada",
      precio: 7500,
      descripcion: "Ideal para personas con problemas de columna"
    }, {
      id: 2,
      nombre: "Mesa de computadora",
      precio: 250000,
      descripcion: "Ideal para personas gamers"
    }, {
      id: 3,
      nombre: "Sofa cama",
      precio: 500000,
      descripcion: "Ideal para descansar y dormir"
    }
  ];

  return (
    <div>
      <CatalogoTienda catalogoProductos={catalogoProductos} />
    </div>
  );
}

export default App;
