/**
 * ARCHIVO DE ENTRADA (ENTRY POINT)
 * Responsabilidad: Levantar el servidor HTTP, conectar middlewares globales y enrutar.
 */

import express from 'express';
import cors from 'cors';
// IMPORTANTE: En ES Modules es obligatorio incluir la extensión '.js' en las importaciones locales
import productRoutes from './src/routes/productRoutes.js';

const app = express();
const PORT = 3000;

// --- MIDDLEWARES GLOBALES ---

// Permite recibir peticiones y solicitudes desde dominios o frontends externos (CORS)
app.use(cors());

// Habilita al servidor para interpretar cuerpos de solicitudes en formato JSON
app.use(express.json());


// --- CAPA DE RUTAS PRINCIPALES ---

// Endpoint de prueba de salud de la API
app.get('/', (req, res) => {
    res.status(200).json({ mensaje: "API en línea. Servidor funcionando correctamente." });
});

// Conexión del módulo de rutas bajo el prefijo universal '/api/productos'
app.use('/api/productos', productRoutes);


// --- MIDDLEWARE PARA CONTROL DE RUTAS NO ENCONTRADAS (404) ---

// Este bloque actúa como comodín. Si ninguna ruta previa coincidió, captura el flujo aquí.
app.use((req, res) => {
    res.status(404).json({
        ok: false,
        error: 404,
        mensaje: `Error: El endpoint '${req.originalUrl}' utilizando el método '${req.method}' no está disponible.`
    });
});


// --- INICIALIZACIÓN DE ESCUCHA ---
app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(`🚀 Servidor backend escuchando en puerto: ${PORT}`);
    console.log(`🔗 URL Local: http://localhost:${PORT}`);
    console.log(`=============================================`);
});
