/**
 * ENRUTADOR DE PRODUCTOS
 * Responsabilidad: Capturar las URLs entrantes y mapearlas al controlador correspondiente.
 */

import express from 'express';
import { 
  createProduct, 
  getAllProducts, 
  getProductsByFilters, // Importamos el nuevo controlador de filtros separado
  getProductById, 
  updateProduct, 
  deleteProduct 
} from '../controllers/products.Controller.js';

const router = express.Router();

/**
 * DEFINICIÓN DE ENDPOINTS PARA PRODUCTOS
 */

// 1. Obtener TODOS los productos (Limpio, sin parámetros de consulta obligatorios)
router.get('/api/products', getAllProducts);

// 2. Nueva ruta exclusiva para búsquedas con filtros (?category=X&price=Y)
// NOTA: Se coloca ANTES de /api/products/:id para evitar conflictos con el parámetro dinámico.
router.get('/api/products/filter', getProductsByFilters);

// 3. Obtener un único producto por su ID dinámico pasado por la URL
router.get("/api/products/:id", getProductById);

// 4. Crear un nuevo producto en la base de datos
router.post("/api/products", createProduct);

// 5. Actualizar campos de un producto existente por su ID
router.put("/api/products/:id", updateProduct);

// 6. Eliminar un producto por su ID
router.delete("/api/products/:id", deleteProduct);

export default router;