import React from 'react';

function ComponentePerfil({nombre, edad, descripcion}) {
    return (
        <div>
            <h2>{nombre}</h2>
            <p> Tengo {edad} mi profesion es ser {descripcion}</p>
        </div>
    );
}

export default ComponentePerfil;