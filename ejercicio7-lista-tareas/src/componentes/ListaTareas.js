import React from "react";

function ListaTareas({listaDeTareas}) {
  return (
    <div>
        <h2>Lista de Tareas</h2>

        <ul>
            {listaDeTareas.map((tarea) => (
                <li key={tarea.id}>
                    {tarea.titulo} - {tarea.completada ?
                     <span style={{ color: 'gray', textDecoration: 'line-through' }}>"Completada"</span> 
                     : <span>"Pendiente a completar"</span>}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default ListaTareas;