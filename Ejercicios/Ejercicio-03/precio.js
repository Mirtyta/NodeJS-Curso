// Ejercicio Nro 3
// Este programa recorre una lista de precios y calcula:
// - el precio base
// - el IVA (21%)
// - el precio final con IVA
// Luego muestra todo en consola con formato claro

// Array de 10 precios (cada valor representa un producto)
const precios = [1000, 3500.5, 3450, 6540.34, 800, 3200, 1240.55, 2000, 3890.67, 213.87];

// Título (se imprime una sola vez)
console.log("=============================================================================");
console.log("                       REPORTE DE PRECIOS");
console.log("=============================================================================\n");

// Recorremos el array con forEach
// "precio" es el valor actual
// "index" es la posición (empieza en 0)
precios.forEach((precio, index) => {

  // Precio base (el valor original)
  const base = precio;

  // Cálculo del IVA (21% del precio)
  const iva = precio * 0.21;

  // Precio final con IVA incluido
  const precioiva = precio * 1.21;

  // Mostramos el resultado en consola
  // toFixed(2) asegura que siempre haya 2 decimales
  // padStart alinea los importe de distintos caracteres, padStart(longitud, caracter)

  console.log(
    `Producto ${String(index + 1).padStart(2)} | Base: $${base.toFixed(2).padStart(7)} | IVA: $${iva.toFixed(2).padStart(7)} | Precio IVA incluido: $${precioiva.toFixed(2).padStart(7)}`
  );

});

/*
📌 ¿Qué hace padStart()?

padStart(longitud, caracter)

👉 Sirve para completar un texto (stribg) agregando caracteres al inicio
hasta alcanzar una longitud específica. no existe un padStart para números directamente.

Ejemplo:
"5".padStart(2) → " 5"
"50".padStart(2) → "50"

👉 En este caso:
- index + 1, como es númerico, primero lo convertimos a string.
- toFixed(2) convierte el número a string con 2 decimales
- padStart(7) asegura que todos los valores ocupen 7 caracteres
- agrega espacios adelante si el número es más corto

💡 Resultado:
Todos los números quedan alineados en columnas,
como si fuera una tabla, mejorando la legibilidad.


🧠 Tips: si utilizan Visual Studio Code, abran el archivo que desean correr 
, y presionen el boton de play ▶️ de su code, se encuentra comunmente a la 
derecha donde esta la barra de nombres de archivo, ésto abrirá una terminal 
y podrán ver sus resultados en la solapa salida de ésa terminal.

*/