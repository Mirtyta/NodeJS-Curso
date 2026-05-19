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
 * 4. RUTA HTML (Misión 2 - Punto 1)
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
 * 5. RUTA JSON (Misión 2 - Punto 2)
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
 * 6. Encendido del servidor
 */
app.listen(PORT, () => {
    console.log(`Servidor de la Misión 10 corriendo con éxito en http://localhost:${PORT}`);
});