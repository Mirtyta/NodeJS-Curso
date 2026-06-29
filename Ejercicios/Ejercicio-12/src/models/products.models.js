/**
 * CAPA DE MODELOS: products.models.js
 * Responsabilidad: Interactuar directamente con el archivo JSON local.
 * * 🌟 MAGIA DE CAPAS: Mantiene exactamente las mismas funciones y parámetros
 * que usábamos en Firestore para que el Service no sufra ningún cambio en su lógica.
 */

import fs from 'fs/promises';
import path from 'path';

// Apuntamos a la ubicación de tu base de datos local JSON
const filePath = path.resolve('src/data/products.json');

/**
 * Función interna auxiliar para leer el archivo JSON y parsearlo de manera segura
 */
const readJsonFile = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Si el archivo no existe o hay un error, devolvemos un array vacío de respaldo
    return [];
  }
};

/**
 * Función interna auxiliar para persistir los datos de forma prolija en el JSON
 */
const writeJsonFile = async (data) => {
  // Guardamos el JSON espaciado con 2 niveles para que siga siendo hermoso y legible
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

// --- MÉTODOS "ESPEJO" DE FIRESTORE ---

/**
 * Trae todos los productos del archivo JSON local.
 * (Mantiene 'collectionName' en la firma aunque internamente leamos siempre el mismo archivo)
 */
export async function readDocuments(collectionName) {
  return await readJsonFile();
}

/**
 * Trae un único producto por su ID.
 */
export async function readDocument(collectionName, id) {
  const products = await readJsonFile();
  return products.find((p) => p.id === id) || null;
}

/**
 * Agrega un nuevo producto generando un ID numérico local único basado en tiempo.
 */
export async function createDocument(collectionName, data) {
  const products = await readJsonFile();
  
  // Generamos un ID local único basado en el timestamp actual (un string numérico)
  const id = Date.now().toString();
  const newProduct = { id, ...data };
  
  products.push(newProduct);
  await writeJsonFile(products);
  return id;
}

/**
 * Actualiza los campos parciales de un producto existente localmente.
 */
export async function updateDocument(collectionName, id, data) {
  const products = await readJsonFile();
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    // Combinamos las propiedades existentes con los nuevos cambios manteniendo el ID original
    products[index] = { ...products[index], ...data, id };
    await writeJsonFile(products);
    return true;
  }
  return false;
}

/**
 * Elimina de manera permanente un producto por su ID del archivo JSON.
 */
export async function deleteDocument(collectionName, id) {
  const products = await readJsonFile();
  const remainingProducts = products.filter((p) => p.id !== id);

  if (products.length !== remainingProducts.length) {
    await writeJsonFile(remainingProducts);
    return true;
  }
  return false;
}