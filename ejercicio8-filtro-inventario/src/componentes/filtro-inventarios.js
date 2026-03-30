import React from "react";

function FiltroInventarios({ vectorProductos, categoriaSeleccionada }) {
    return (
        <div>
            <h1>Filtrar de Inventarios:</h1>

            {vectorProductos.filter(producto => producto.categoria === categoriaSeleccionada)
            .map((producto, index) => (
                <ul key={index}>   
                    <li>Nombre del producto: {producto.nombre}</li>
                    <li>Precio del producto: ${producto.precio}</li>
                    <li>Categoría del producto: {producto.categoria}</li>
                </ul>
            ))}

        </div>
    );
}

export default FiltroInventarios;