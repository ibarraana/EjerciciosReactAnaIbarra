import './App.css';
import ListaCompras from './componentes/ListaCompras';

function App() {
  const listaCompras = ["Manzanas", "Pan", "Leche", "Huevos"];

  return (
    <div>
      <ListaCompras vectorString={listaCompras} />    </div>
  );
}

export default App;
