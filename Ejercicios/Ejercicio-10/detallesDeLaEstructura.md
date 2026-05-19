# Hablemos sobre el ejercicio 10

## 📂 ¿Qué se pone en cada carpeta?

Imaginate el backend como un restaurante organizado:

  1- 📁 routes/ (Las Puertas de Entrada)  
  Acá van los archivos que definen qué URLs existen en tu aplicación y qué método HTTP usan (GET, POST, etc.). Su única función es recibir la petición del cliente y derivarla al controlador correcto. No manejan lógica ni datos.

  Si el cliente golpea la puerta de /productos, este archivo dice: "Ok, pasá por acá y que te atienda el mozo de productos".

  2- 📁 controllers/ (Los Mozos / Orquestadores)  
  Reciben la petición de las rutas. Su trabajo es controlar el flujo: agarrar los datos que mandó el cliente (como un ID o un formulario), pedirle a los servicios lo que haga falta, y armar la respuesta final (res.send, res.json, etc.).

  El mozo toma tu pedido, va a la cocina (servicios), trae el plato y te lo sirve en la mesa con el estado HTTP correcto (ej. 200 u okey).

  3- 📁 services/ (Los Cocineros / Lógica de Negocio)  
  Acá está la inteligencia de tu aplicación. Todo lo que sea hacer cálculos, filtrar datos, aplicar reglas del negocio o conectarse a APIs externas se procesa acá. Los controladores los llaman para delegarles el trabajo pesado.

  El cocinero sabe la receta secreta, mezcla los ingredientes y prepara el plato, pero no sabe quién es el cliente ni le importa cómo se lo van a servir.

  4- 📁 models/ (La Despensa / Estructura de Datos)  
  Define la forma y estructura de tus datos. Si usás una base de datos, acá se configuran los planos (esquemas) de cómo es un "Usuario" o un "Producto" (ej. qué campos tiene, si el precio es un número, etc.).

  Es el inventario de la despensa que le dice al cocinero exactamente qué ingredientes tiene disponibles y qué forma tienen.

---

## 🛠️ Cómo quedaría tu estructura en VS Code

En la raíz de tu proyecto (la carpeta principal ejercicio-10) va todo lo que configura el entorno, incluyendo las dependencias instaladas.

Ahí es donde tirás el comando npm install express, y automáticamente se genera la carpeta node_modules.

Para cumplir con la Misión 1, tu árbol de carpetas dentro del proyecto ejercicio-10 debería verse así (podés crear las carpetas vacías por ahora):

ejercicio-10/  <-- ESTA ES LA RAÍZ  
├── 📁 node_modules/   (Se instala acá automáticamente)  
├── 📁 src/            (Acá metés tu código limpio)  
│   ├── 📁 controllers/  
│   ├── 📁 models/  
│   ├── 📁 routes/  
│   └── 📁 services/  
├── 📄 package-lock.json  
├── 📄 package.json    (Configura todo el proyecto)  
└── 📄 index.js        (Tu archivo principal de arranque)  

## 📌 ¿Dónde va el index.js?

Por convención, tenés dos opciones totalmente válidas, pero la que mencionás es súper cómoda para arrancar:

Opción A : Dejar el index.js en la raíz. Es genial porque cuando mirás la carpeta del proyecto, el archivo de arranque está ahí a primera vista. En tu package.json, tu script de inicio se queda exactamente igual: "start": "node index.js".

Opción B (Todo adentro): Algunos desarrolladores meten el index.js también adentro de src/. Si hicieras eso, lo único que cambia es que en tu package.json tenés que avisarle a Node que el archivo se movió, cambiando el script a: "start": "node src/index.js".

Cualquiera de las dos formas está perfecta, pero dejar el index.js en la raíz junto al package.json y que apunte a las carpetas de adentro de src es superordenado y muy usado.

## 🖥️ ¿Por qué en Backend (Node) se suele dejar AFUERA en la raíz?

En Node.js, la terminal ejecuta el archivo de forma directa, sin empaquetadores en el medio (salvo raras excepciones).

Muchos desarrolladores prefieren dejar el index.js en la raíz porque actúa como el "portero" o interruptor principal del proyecto. Al abrir la carpeta, lo primero que ves es el package.json y al lado el index.js. Desde ahí, el código simplemente importa la lógica pesada que está resguardada adentro de src.

## 🚀 Tu código adaptado para la estructura con src

Para que te quede de machete técnico documentado, si dejás el index.js en la raíz, cuando Sabrina y Matías te pidan en la próxima clase mudar las rutas a su carpeta correspondiente, los import de tu index.js apuntarán hacia adentro de src.

## 🚀 Tu código base para index.js (Cumpliendo la Misión 2)

Tomando como base el index.js que dejamos impecable en el ejercicio anterior en el puerto 4000 (para evitar fantasmas), acá tenés las dos rutas nuevas que te piden: la de HTML y la de JSON, súper documentadas para tu revisión posterior:

```JavaScript
// 1. Importamos Express usando ES Modules
import express from 'express';

// 2. Inicializamos la aplicación
const app = express();

// 3. Definimos el puerto de escucha
const PORT = 4000;

/**
 * 4. RUTA Raíz (Misión 2 - Punto 1)
 * Devuelve una respuesta en formato HTML (Página de bienvenida).
 * Usamos res.send() pasando una estructura de etiquetas HTML como String.
 */

app.get('/', (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Bienvenido a mi API</title>
            <style>
                body { font-family: sans-serif; text-align: center; margin-top: 50px; background-color: #e6d59d; }
                h1 { color: #333; }
                p { color: #666; }
            </style>
        </head>
        <body>
            <h1>¡Hola mundo desde Express!</h1>
            <p>Para ver las rutas debes tipear</p></br>
            <p>http://localhost:4000/json</p></br>
            <p>http://localhost:4000/html</p></br>
        </body>
        </html>
    `);
});

/**
 * 5. RUTA HTML (Misión 2 - Punto 1)
 * Devuelve una respuesta en formato HTML (Página de HTML).
 * Usamos res.send() pasando una estructura de etiquetas HTML como String.
 */
app.get('/HTML', (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Bienvenido a mi API</title>
            <style>
                body { font-family: sans-serif; text-align: center; margin-top: 50px; background-color: #4f4fb4d8; }
                h1 { color: #ddd; }
                p { color: #ccc; }
                
            </style>
        </head>
        <body>
            <h1>¡Esta es la ruta mostrando HTML! </h1>
            <p>Éste es el ejemplo de la ruta /HTML</p>
        </body>
        </html>
    `);
});

/**
 * 6. RUTA JSON (Misión 2 - Punto 2)
 * Devuelve una respuesta en formato JSON con productos ficticios.
 * Usamos res.json() que automáticamente configura el Content-Type como application/json.
 */
app.get('/JSON', (req, res) => {
    const productosFicticios = [
        { id: 1, nombre: "Teclado Mecánico", precio: 45000 },
        { id: 2, nombre: "Mouse Gamer", precio: 25000 },
        { id: 3, nombre: "Monitor 24 pulgadas", precio: 180000 }
    ];

    res.status(200).json(productosFicticios);
});

/**
 * 7. Encendido del servidor
 */
app.listen(PORT, () => {
    console.log(`Servidor de la Misión 10 corriendo con éxito en http://localhost:${PORT}`);
});

```

Espero les sea de gran utilidad las cosas que les paso, que tengan un lindo día!, nos vemos en la siguiente clase...
