import PanelUsuario from './componentes/PanelUsuario';

function App() {
  return (
    <div>
        <h2>Guardia de Seguridad</h2>
        <PanelUsuario estaLogueado={true} />
    </div>
  );
}

export default App;
