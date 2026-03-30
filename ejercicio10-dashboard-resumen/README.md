
# Enunciado de este ejercicio

10.⁠ ⁠El Dashboard de Resumen (Estructuras Complejas)
Crea un componente principal Dashboard que reciba un único y gran objeto JSON como prop. Este objeto complejo contendrá:

usuario: Un objeto con nombre y rol.

notificaciones: Un vector de strings con alertas recientes.

transacciones: Un vector de objetos (con id, monto, fecha).

El componente debe desempaquetar toda esta información y estructurar una pantalla dividida en tres secciones (Perfil, Alertas, y Tabla de Transacciones), idealmente creando y utilizando tres sub-componentes más pequeños para mantener el código limpio y ordenado.