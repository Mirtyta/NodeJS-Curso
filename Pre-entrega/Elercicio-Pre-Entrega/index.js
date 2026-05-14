/**
 * Proyecto: Gestión de Productos (CLI) - TechLab
 * Alumna: Mirta Gómez
 * Descripción: Aplicación de consola para gestionar productos en MockAPI.
 * Características: Confirmación de borrado, validación de datos y tablas limpias.
 */

// MODULOS NATIVOS:
// node:process -> Para capturar argumentos de la terminal (process.argv)
// node:readline -> Para crear una interfaz interactiva de preguntas y respuestas, en éste ejercicio lo utilizo para el DELETE

import process from 'node:process';
import readline from 'node:readline';

// 1. Configuración de Argumentos y URL
const [ , , metodo, ruta, ...extras] = process.argv;
const URL_BASE = "https://6a051be7aa826ca75c09790c.mockapi.io/Products";

/**
 * Utilidad para pausar la ejecución y pedir confirmación al usuario
 */
function preguntar(pregunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => rl.question(pregunta, (ans) => {
        rl.close();
        resolve(ans.toLowerCase());
    }));
}

/**
 * Función principal: Orquestador de la aplicación
 */
async function iniciarApp() {
    // Validamos que se ingresen los comandos básicos
    if (!metodo || !ruta) {
        console.error("❌ Error: Uso correcto -> npm run start <METODO> products/<ID>");
        return;
    }

    const [recurso, id] = ruta.split('/');

    if (recurso !== 'products') {
        console.error("❌ Error: Solo se permite el recurso 'products'.");
        return;
    }

    try {
        switch (metodo.toUpperCase()) {
            case 'GET':
                await manejarGet(id);
                break;
            case 'POST':
                await manejarPost(extras);
                break;
            case 'DELETE':
                await manejarDelete(id);
                break;
            default:
                console.error("❌ Error: Método no soportado (Usar GET, POST o DELETE).");
        }
    } catch (error) {
        console.error("❗ Fallo en la comunicación con la API:", error.message);
    }
}

/**
 * Obtiene y muestra los productos. 
 * Si hay ID, muestra uno. Si no, muestra la lista completa.
 */
async function manejarGet(id) {
    const urlFinal = id ? `${URL_BASE}/${id}` : URL_BASE;
    const response = await fetch(urlFinal);
    
    if (response.ok) {
        const data = await response.json();
        const productos = Array.isArray(data) ? data : [data];

        // TRUCO: Usamos un objeto para que el ID sea la clave y no aparezca la columna 'index'
        const tablaFormateada = {};
        productos.forEach(p => {
            tablaFormateada[p.id] = {
                Producto: p.titulo,
                Precio: p.precio,
                Categoría: p.categoria
            };
        });

        console.log(`\n📦 --- LISTADO DE PRODUCTOS (ID como índice) ---`);
        console.table(tablaFormateada);
    } else {
        console.error(`❌ Error: No se pudo encontrar el recurso ${id || ''}`);
    }
}

/**
 * Crea un nuevo producto enviando datos a la API.
 */
async function manejarPost(datos) {
    const [titulo, precio, categoria] = datos;

    // Validación de campos obligatorios
    if (!titulo || !precio || !categoria) {
        console.error("❌ Error: Faltan datos. Formato: POST products <titulo> <precio> <categoria>");
        return;
    }

    const nuevoProducto = {
        titulo,
        precio: parseFloat(precio),
        categoria
    };

    const response = await fetch(URL_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
    });

    if (response.ok) {
        const creado = await response.json();
        console.log("✅ Producto creado con éxito en la base de datos.");
        
        // Mostramos solo lo relevante para evitar columnas vacías del schema
        console.table([{
            ID: creado.id,
            Producto: creado.titulo,
            Precio: creado.precio
        }]);
    } else {
        console.error("❌ No se pudo guardar el producto.");
    }
}

/**
 * Busca un producto, lo muestra y pide confirmación antes de borrarlo.
 */
async function manejarDelete(id) {
    if (!id) {
        console.error("❌ Error: Debes indicar el ID (ej: products/5)");
        return;
    }

    // Paso 1: Buscar para mostrar qué se va a borrar
    const responseGet = await fetch(`${URL_BASE}/${id}`);
    
    if (responseGet.ok) {
        const p = await responseGet.json();
        console.log("\n⚠️  ESTÁS POR ELIMINAR EL SIGUIENTE REGISTRO:");
        console.table({ [p.id]: { Título: p.titulo, Precio: p.precio } });

        // Paso 2: Confirmación interactiva
        const confirmacion = await preguntar("¿Confirmas la eliminación? (si/no): ");

        if (confirmacion === 'si' || confirmacion === 's') {
            const responseDel = await fetch(`${URL_BASE}/${id}`, { method: 'DELETE' });
            if (responseDel.ok) {
                console.log(`✅ El producto con ID ${id} fue removido.`);
            }
        } else {
            console.log("❌ Acción cancelada.");
        }
    } else {
        console.error(`❌ Error: El ID ${id} no existe en MockAPI.`);
    }
}

// Ejecución
iniciarApp();