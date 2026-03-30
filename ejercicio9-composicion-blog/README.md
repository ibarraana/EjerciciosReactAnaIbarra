# Enunciado de este ejercicio

9.⁠ ⁠Composición del Blog (Componentes dentro de Componentes)
Crea dos componentes separados. Primero, un componente Articulo que simplemente reciba titulo, autor y contenido y los muestre formateados. Luego, crea un componente Blog que reciba un vector de JSONs con múltiples artículos. El componente Blog debe iterar sobre el vector, pero en lugar de escribir el HTML directamente, debe "llamar" y renderizar al componente Articulo por cada iteración, pasándole los datos correspondientes por props.
