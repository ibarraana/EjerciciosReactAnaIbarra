import React from "react";

function Articulo({ titulo, autor, contenido }) {
    return (
        <div>
            <p>El artículo {titulo} fue escrito por {autor}. Su contenido es: {contenido}</p>
        </div>
    );
}

export default Articulo;