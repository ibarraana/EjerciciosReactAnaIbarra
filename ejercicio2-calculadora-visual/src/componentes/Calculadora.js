import React from "react";

function Calculadora({num1, num2}) {
    return (    
        <div>
            <h1>Calculadora Visual</h1>
            <p>Número 1: {num1}, Número 2: {num2}</p>
            <br />
            <ul>
                <li>El resultado de la suma de ambos es: {num1 + num2}</li>
                <li>El resultado de la resta de ambos es: {num1 - num2}</li>
                <li>El resultado de la multiplicación es: {num1 * num2}</li>
                <li>El resultado de la división es: {num1 / num2}</li>
            </ul>
        </div>
    );
}

export default Calculadora;