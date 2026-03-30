import React from "react";

function TarjetaContacto({ contacto }) {
  return (
    <div>
      <h2>{contacto.nombre}</h2>
      <p>Email: {contacto.email}</p>
      <p>Teléfono: {contacto.telefono}</p>
      <p>Dirección: {contacto.direccion.calle}</p>
      <p>Ciudad:{contacto.direccion.ciudad}</p>
    </div>
  );
}

export default TarjetaContacto;