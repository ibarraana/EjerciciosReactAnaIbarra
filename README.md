# Resolución de ejercicios realizados con React

Para la resolución de los mismos se utilizo React Convencional

Comando para creación de los proyectos

```bash
npx create-react-app nombre-proyectos
```

Comando para ejecutar los proyectos

```bash
npm start
```

## Consignas de cada uno de los ejercicios


1.⁠ ⁠La Tarjeta de Presentación
Crea un componente llamado Perfil que reciba tres propiedades (props): nombre, edad y profesión. El componente debe renderizar un contenedor con un título (h2) para el nombre y un párrafo que construya una oración de presentación combinando la edad y la profesión.

2.⁠ ⁠Calculadora Visual
Crea un componente Calculadora que reciba dos números como props (numA y numB). El componente debe renderizar una lista (ul) donde cada elemento (li) muestre el resultado de sumar, restar, multiplicar y dividir esos dos números.

3.⁠ ⁠El Guardia de Seguridad (Renderizado Condicional)
Crea un componente PanelUsuario que reciba una propiedad booleana llamada estaLogueado. Utilizando un operador ternario o el operador lógico &&, el componente debe mostrar un encabezado que diga "¡Bienvenido a tu cuenta!" si el valor es verdadero, o "Por favor, inicia sesión para continuar" si es falso.

### Nivel 2: Objetos (JSON) y Vectores Simples

4.⁠ ⁠Tarjeta de Contacto Estructurada
Crea un componente que reciba un único objeto JSON llamado contacto. Este objeto debe contener nombre, email, telefono y un sub-objeto direccion (que contenga calle y ciudad). El componente debe extraer todas estas variables y mostrarlas visualmente en un formato de tarjeta de presentación.

5.⁠ ⁠La Lista de Compras
Crea un componente ListaCompras que reciba un vector de strings (por ejemplo: ['Manzanas', 'Leche', 'Pan', 'Huevos']). Utilizando la función .map() de JavaScript, el componente debe iterar sobre el vector y renderizar una lista desordenada en HTML (&lt;ul&gt; con sus respectivos &lt;li&gt;).


### Nivel 3: Vectores de JSON y Estilos Condicionales

6.⁠ ⁠El Catálogo de la Tienda
Crea un componente Catalogo que reciba un vector de objetos JSON, donde cada objeto representa un producto con las propiedades: id, nombre, precio y descripcion. El componente debe iterar sobre este vector y renderizar una cuadrícula o lista donde se vea la información de cada producto. (Nota: no olviden usar la prop key al iterar).

7.⁠ ⁠Lista de Tareas (To-Do List Visual)
Crea un componente que reciba un vector de tareas. Cada tarea es un JSON con id, titulo y completada (un booleano). Al renderizar la lista con .map(), aplica una condición: si la tarea está completada, el texto debe aparecer tachado o con un color de texto gris; si no, debe verse normal.

### Nivel 4: Lógica de JavaScript Aplicada y Composición

8.⁠ ⁠Filtro de Inventario
Crea un componente Inventario que reciba dos props: un vector de productos (con nombre, precio y categoria) y un string llamado categoriaSeleccionada. Antes de renderizar, el componente debe usar el método .filter() de JavaScript para quedarse solo con los productos que coincidan con la categoriaSeleccionada. Luego, usa .map() para mostrar en pantalla solo los productos filtrados.

9.⁠ ⁠Composición del Blog (Componentes dentro de Componentes)
Crea dos componentes separados. Primero, un componente Articulo que simplemente reciba titulo, autor y contenido y los muestre formateados. Luego, crea un componente Blog que reciba un vector de JSONs con múltiples artículos. El componente Blog debe iterar sobre el vector, pero en lugar de escribir el HTML directamente, debe "llamar" y renderizar al componente Articulo por cada iteración, pasándole los datos correspondientes por props.

10.⁠ ⁠El Dashboard de Resumen (Estructuras Complejas)
Crea un componente principal Dashboard que reciba un único y gran objeto JSON como prop. Este objeto complejo contendrá:

usuario: Un objeto con nombre y rol.

notificaciones: Un vector de strings con alertas recientes.

transacciones: Un vector de objetos (con id, monto, fecha).

El componente debe desempaquetar toda esta información y estructurar una pantalla dividida en tres secciones (Perfil, Alertas, y Tabla de Transacciones), idealmente creando y utilizando tres sub-componentes más pequeños para mantener el código limpio y ordenado.