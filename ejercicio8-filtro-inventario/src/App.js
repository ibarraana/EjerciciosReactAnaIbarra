import FiltroInventarios from "./componentes/filtro-inventarios";

function App() {

  const vectorDeProductos = [
    {
      nombre: "Producto 1",
      precio: 10.99,
      categoria: "Bazar"
    },
    {
      nombre: "Producto 2",
      precio: 5.49,
      categoria: "Hogar"
    },
    {
      nombre: "Producto 3",
      precio: 20.00,
      categoria: "Electrónica"
    }
  ];

  return (
    <div>
      <FiltroInventarios vectorProductos={ vectorDeProductos } categoriaSeleccionada="Hogar" />
    </div>
  );
}

export default App;
