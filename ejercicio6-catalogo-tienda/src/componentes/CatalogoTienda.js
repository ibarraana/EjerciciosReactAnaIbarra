import React from "react";

function CatalogoTienda({ catalogoProductos }) {
    return (
        <div>
            <hl>Catálogo de Tienda</hl>
            
            <br />

            {catalogoProductos.map(producto => (
                <ul key={producto.id}>
                    <li>Número del producto: {producto.id}</li>
                    <li>Nombre del producto: {producto.nombre}</li>
                    <li>Precio del producto: ${producto.precio}</li>
                    <li>Descripción del producto: {producto.descripcion}</li>
                </ul>
            ))}            
        </div>
    );
}

export default CatalogoTienda;