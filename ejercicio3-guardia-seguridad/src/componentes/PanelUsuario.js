import React from "react";

function PanelUsuario({estaLogueado}) {
  return (
    <div>
      {estaLogueado ? <p>¡Bienvenido a tu cuenta!</p> : <p>Por favor, inicia sesión para continuar</p>}
    </div>
  );
}

export default PanelUsuario;