/**
 * CONTROLADOR DE PRODUCTOS
 * Responsabilidad: Recibir los parámetros procesados y armar las respuestas HTTP.
 */

// Datos simulados (Mock Data) para realizar las pruebas de filtros
const productosSimulados = [
    { id: 1, nombre: "Teclado Mecánico", categoria: "perifericos", precio: 45000 },
    { id: 2, nombre: "Mouse Gamer", categoria: "perifericos", precio: 25000 },
    { id: 3, nombre: "Monitor 24' FHD", categoria: "monitores", precio: 180000 },
    { id: 4, nombre: "Auriculares Bluetooth", categoria: "audio", precio: 35000 }
];

/**
 * Obtiene un producto específico mediante PATH PARAMS (:id)
 */
const obtenerPorId = (req, res) => {
    // Los Path Params se capturan desde req.params y llegan como String.
    // Lo convertimos a Número entero para compararlo correctamente.
    const idProducto = parseInt(req.params.id);
    
    // Buscamos el producto correspondiente en el array
    const producto = productosSimulados.find(p => p.id === idProducto);

    // Si el producto no existe, retornamos un estado HTTP 404
    if (!producto) {
        return res.status(404).json({
            ok: false,
            mensaje: `No se encontró el producto con el ID: ${idProducto}`
        });
    }

    // Si existe, retornamos un estado HTTP 200 y el objeto del producto
    res.status(200).json({
        ok: true,
        mensaje: "Producto recuperado con éxito (Path Param procesado)",
        data: producto
    });
};

/**
 * Filtra los productos del catálogo mediante QUERY PARAMS (?categoria=valor)
 */
const filtrarProductos = (req, res) => {
    // Los Query Params son opcionales y se extraen mediante desestructuración de req.query
    const { categoria, precioMax } = req.query;
    
    let resultado = [...productosSimulados];

    // Aplicamos filtro de categoría si viene presente en la URL
    if (categoria) {
        resultado = resultado.filter(p => p.categoria === categoria.toLowerCase());
    }

    // Aplicamos filtro por precio máximo si viene presente en la URL
    if (precioMax) {
        resultado = resultado.filter(p => p.precio <= parseFloat(precioMax));
    }

    // Respondemos con los datos filtrados y metadatos informativos
    res.status(200).json({
        ok: true,
        mensaje: "Catálogo consultado con éxito (Query Params procesados)",
        filtrosAplicados: { categoria, precioMax },
        totalResultados: resultado.length,
        data: resultado
    });
};

// Exportación nombrada compatible con ES Modules
export {
    obtenerPorId,
    filtrarProductos
};
