import DashboardResumen from "./componentes/dashboard-resumen";

function App() {

  const jsonDatos = [{
    "usuarios": {
      "nombre": "Ana Ibarra",
      "rol": "Programadora"
    },
    "notificaciones": [
      "Alerta 1", 
      "Alerta 2",
      "Alerta 3"
    ],
    "transacciones": [
      {
        "id": 1,
        "monto": 100,
        "fecha": "10/03/2026"
      },
      {
        "id": 2,
        "monto": 200,
        "fecha": "20/03/2026"
      },
      {
        "id": 3,
        "monto": 300,
        "fecha": "30/03/2026"
      }
    ]
  }];

  return (
    <div>
      <DashboardResumen jsonDatos={jsonDatos} />
    </div>
  );
}

export default App;
