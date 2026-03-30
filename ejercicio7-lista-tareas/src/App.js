import ListaTareas from './componentes/ListaTareas';

function App() {

  const jsonTareas = [
    {
      "id": 1,
      "titulo": "Estudiar React",
      "completada": true
    },
    {
      "id": 2,
      "titulo": "Hacer ejercicios de JavaScript",
      "completada": true
    },
    {
      "id": 3,
      "titulo": "Hacer ejercicios de HTML5 y CSS3",
      "completada": false
    }
  ];

  return (
    <div>
      <ListaTareas listaDeTareas={jsonTareas} />
    </div>
  );
}

export default App;
