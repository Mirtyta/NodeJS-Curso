// 1. Importamos Express usando la sintaxis de ES Modules (gracias al "type": "module" en package.json)
import express from 'express';

// 2. Inicializamos la aplicación de Express
const app = express();

// 3. Definimos el puerto en el que va a escuchar el servidor
const PORT = 3000;

/**
 * 4. Creamos la ruta principal (raíz '/')
 * Express simplifica el manejo de peticiones (req) y respuestas (res).
 */
app.get('/', (req, res) => {
    // NOTA: .status(200) se coloca ANTES de .send(). 
    // De lo contrario, Express envía la respuesta y no puede modificar las cabeceras después.
    res.status(200).send('Hola, mundo con Express y ES Modules!');
});

/**
 * 5. Ponemos al servidor a escuchar en el puerto especificado
 * Una vez que el servidor se levanta con éxito, se ejecuta la función callback.
 */
app.listen(PORT, () => {
    // NOTA: El console.log solo muestra información en la consola de desarrollo,
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});