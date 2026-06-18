/**
 * ENRUTADOR DE PRODUCTOS
 * Responsabilidad: Capturar las URLs y mapearlas hacia sus respectivos controladores.
 */

import express from 'express';
// Importamos los controladores utilizando desestructuración
import { filtrarProductos, obtenerPorId } from '../controllers/productController.js';

const router = express.Router();

// Ruta Base: Maneja QUERY PARAMS (Estructura: /api/productos?categoria=X)
// Nota: Los query params no se declaran explícitamente en la definición de la ruta.
router.get('/', filtrarProductos);

// Ruta Dinámica: Maneja PATH PARAMS (Estructura: /api/productos/:id)
// El uso de ':' le indica a Express que es un parámetro dinámico obligatorio.
router.get('/:id', obtenerPorId);

export default router;