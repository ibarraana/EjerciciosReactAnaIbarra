import Blog from "./componentes/blog";

function App() {

  const articulos = [
    {
      titulo: "Titulo 1",
      autor: "Autor 1",
      contenido: "Contenido 1"
    },
    {
      titulo: "Titulo 2",
      autor: "Autor 2",
      contenido: "Contenido 2"
    },
    {
      titulo: "Titulo 3",
      autor: "Autor 3",
      contenido: "Contenido 3"
    }
  ];

  return (
    <div>
      <Blog listadoArticulos={articulos} />
    </div>
  );
}

export default App;


