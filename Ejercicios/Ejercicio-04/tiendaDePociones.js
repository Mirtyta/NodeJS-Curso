/* 📝 Ejercicio: "La Tienda de Pociones" (Historia)
Contexto:
En el Callejón Diagon, la dueña de la tienda de pociones necesita un sistema. 
Tiene ingredientes que vencen y necesita saber cuáles están listos para usar.

Tu Misión:
La Clase Pocion:
Constructor: recibe nombre, stock (cantidad) y nivelDePeligro (un número del 1 al 10).
Limpieza: El nombre debe estar en MAYÚSCULAS y sin espacios.
Método esSegura(): Debe devolver true si el nivelDePeligro es menor a 5.
El Inventario (Array):
Crea una lista con 4 pociones.
El Reporte (Función):
Crea una función que reciba el inventario.
Usá un forEach con destructuring para obtener el nombre y el stock.
Si la poción es segura (usando el método), imprimí: 
"La poción [NOMBRE] es segura. Tenemos [STOCK] unidades".
Si no es segura, imprimí: 
"⚠️ ATENCIÓN: [NOMBRE] es peligrosa. ¡Manejar con cuidado!".

💡 Un consejo antes de empezar:
Antes de escribir el código, hacé este dibujito mental o en un papel:
Clase: ¿Cómo se llaman mis "cajones" (this.algo)?
ForEach: ¿Qué apodo le voy a poner a cada poción cuando la revise? (Ej: p)
Destructuring: const { ... } = p; (¡Asegurate de que los nombres coincidan con los de la Clase!). */


class pociones {
  constructor(nombre, stock, nivelpeligro) {
    this.pocion = nombre.trim().toUpperCase();
    this.stock = stock;
    this.peligro = nivelpeligro;    
  }
}

const misPociones = [
  new pociones("Filtro de Amor", 15, 3),
  new pociones("Suerte Líquida", 4, 4),
  new pociones("Maldiciones de Medianoche", 10, 7), 
  new pociones("Veneno Mortal", 18, 9)
]

console.log("Pociones seguras")

misPociones.forEach(element => {
  const { peligro } = element;

  if (peligro < 5) {
    console.log(`La poción "${element.pocion}" es segura. Tenemos ${element.stock} unidades`)
    
  } else {
    console.log(`⚠️ ATENCIÓN: La poción "${element.pocion}" es peligrosa. Tenemos ${element.stock} unidades`)
    
  }
  
});

/* 1. El Método vs. El IF
En éste ejercicio, creamos un método dentro de la clase llamado esSegura().
Lo que hice antes es: Poner la lógica if (peligro < 5) directamente en el forEach.
Lo ideal: Que la poción "sepa" si es segura a sí misma.
¿Por qué? Porque si mañana tenés 20 lugares distintos donde necesitás saber si es segura, 
y el límite cambia de 5 a 6, tendrías que buscar los 20 if y cambiarlos. Si es un método, 
lo cambiás en un solo lugar (la Clase).

2. Aprovechando el Destructuring
Ya que usaste const { peligro } = element;, ¡podés sacar todo de una vez! Así el código 
queda más corto y elegante.
Así se vería la versión "Pro" con esos ajustes: */

class PocionesConMetodo { // 💡 Convención: Clases siempre con Mayúscula
  constructor(nombre, stock, nivelpeligro) {
    this.pocion = nombre.trim().toUpperCase();
    this.stock = stock;
    this.peligro = nivelpeligro;    
  }

  // 💡 Agregamos el método aquí
  esSegura() {
    return this.peligro < 5;
  }
}

const lasPociones = [
  new PocionesConMetodo(" Filtro de Amor ", 15, 3),
  new PocionesConMetodo("Suerte Líquida", 4, 4),
  new PocionesConMetodo("Maldiciones de Medianoche", 10, 7), 
  new PocionesConMetodo("Veneno Mortal", 18, 9)
];

misPociones.forEach(element => {
  // 💡 Sacamos todo lo que vamos a usar en una sola línea
  const { pocion, stock } = element;

  // 💡 Usamos el método de la clase
  if (element.esSegura()) {
    console.log(`La poción "${pocion}" es segura. Tenemos ${stock} unidades`);
  } else {
    console.log(`⚠️ ATENCIÓN: "${pocion}" es peligrosa. Tenemos ${stock} unidades`);
  }
});

// De todas maneras existen muchas formas de hacer lo mismo, aquí sólo te muestro 2!