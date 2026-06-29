/**
 * SEMILLA DE DATOS (Seed)
 * Responsabilidad: Crear el archivo JSON local con los productos iniciales estructurados.
 */

import fs from 'fs/promises';
import path from 'path';

const initialProducts = [
    { name: "Mouse Gamer", price: 25000, category: "perifericos", stock: 10, description: "Mouse óptico 16000 DPI" },
    { name: "Monitor 24'", price: 180000, category: "monitores", stock: 5, description: "Monitor IPS 144Hz" },
    { name: "Auriculares 7.1", price: 35000, category: "audio", stock: 8, description: "Sonido envolvente" },
    { name: "Teclado Mecánico RGB", price: 45000, category: "perifericos", stock: 15, description: "Teclado gamer con switches azules" },
    { name: "Silla Gamer Ergonómica", price: 120000, category: "muebles", stock: 4, description: "Silla con soporte lumbar y cervical" },
    { name: "Webcam Full HD 1080p", price: 35000, category: "perifericos", stock: 20, description: "Webcam con micrófono integrado" },
    { name: "Placa de Video RTX 3060", price: 450000, category: "hardware", stock: 3, description: "Placa de video de alta gama" },
    { name: "Procesador Intel i7", price: 380000, category: "hardware", stock: 6, description: "Procesador de 12va generación" },
    { name: "Disco SSD 1TB NVMe", price: 65000, category: "hardware", stock: 25, description: "Almacenamiento ultra rápido" },
    { name: "Fuente de Poder 750W", price: 85000, category: "hardware", stock: 12, description: "Fuente modular certificada 80 Plus" },
    { name: "Gabinete ATX Vidrio", price: 55000, category: "hardware", stock: 10, description: "Gabinete con panel lateral de vidrio templado" },
    { name: "Router WiFi 6", price: 42000, category: "redes", stock: 18, description: "Router de alta velocidad" },
    { name: "Parlantes 2.1 Bluetooth", price: 28000, category: "audio", stock: 9, description: "Sistema de audio inalámbrico" },
    { name: "Micrófono Condensador", price: 48000, category: "audio", stock: 7, description: "Micrófono ideal para streaming" }
];

const seed = async () => {
    // Definimos dónde se guardará el JSON local
    const filePath = path.resolve('src/data/products.json');
    
    console.log("🚀 Iniciando generación del archivo JSON de productos local...");
    try {
        // Mapeamos los productos para inyectarles un ID único incremental de prueba
        const productsWithId = initialProducts.map((product, index) => {
            return {
                id: (Date.now() + index).toString(), // Genera IDs únicos correlativos
                name: product.name,
                price: product.price,
                category: product.category,
                stock: product.stock,
                description: product.description
            };
        });

        // Escribimos el archivo estructurado con espacios (2) para que sea súper legible
        await fs.writeFile(filePath, JSON.stringify(productsWithId, null, 2), 'utf-8');
        
        console.log(`✨ Proceso terminado. Archivo creado con éxito en: ${filePath}`);
        process.exit(0);
    } catch (error) {
        console.error("❌ Error en la carga local:", error.message);
        process.exit(1);
    }
};

seed();