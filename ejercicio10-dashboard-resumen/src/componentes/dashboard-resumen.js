import React from "react";

function DashboardResumen({ jsonDatos }) {
    return (
        <div>
            <h2>Resumen del Dashboard</h2>  

            <h2>Perfil:</h2>
            <p>Nombre: {jsonDatos[0].usuarios.nombre}</p>
            <p>Rol: {jsonDatos[0].usuarios.rol}</p>   

            <h2>Alertas</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Notificaciones</th>
                    </tr>
                </thead>
                <tbody>                    
                    {jsonDatos[0].notificaciones.map((notificacion, index) => (
                        <tr key={index}>
                            <td>{notificacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 

            <h2>Transacciones</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>monto</th>
                        <th>fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonDatos[0].transacciones.map((transaccion) => (
                        <tr key={transaccion.id}>
                            <td>{transaccion.id}</td>
                            <td>{transaccion.monto}</td>
                            <td>{transaccion.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>      
        </div>
    );
}

export default DashboardResumen;