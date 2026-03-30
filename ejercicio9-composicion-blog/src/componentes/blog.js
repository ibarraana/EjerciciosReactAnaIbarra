import React from "react";
import Articulo from "./articulo";

function Blog({ listadoArticulos }) {
    return (
        <div>
            <h1>Datos de los articulos dentro del Blog</h1>
            
            {listadoArticulos.map((articulo, index) => (
                <div key={index}>
                    <Articulo titulo={articulo.titulo} autor={articulo.autor} contenido={articulo.contenido} 
                    />
                </div>
            ))}
        </div>
    );
}

export default Blog;