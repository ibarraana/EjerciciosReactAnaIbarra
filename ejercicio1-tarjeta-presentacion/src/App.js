import './App.css';
import ComponentePerfil from './componentes/Perfil'; // Importar con Mayúscula

function App() {
  return (
    <div className="App">
      <ComponentePerfil nombre="Ana Gabriela Ibarra" edad="X años" 
      descripcion="Profesora y programadora web, con años de experiencia
       en docencia y aprendizaje constante en desarrollo utilizaodn multipes tecnologias" />
    </div>
  );
}

export default App;
