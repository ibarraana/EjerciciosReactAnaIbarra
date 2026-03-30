import React from "react";

function ListaCompras({vectorString}) {
    return (
        <div>
            <h1>Lista de compras</h1>
            <ul>
                {vectorString.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras;