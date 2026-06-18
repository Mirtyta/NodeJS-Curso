# Ejercicio Clase N° 11: REQUEST & RESPONSE

Este proyecto guía la configuración profesional de la capa de rutas en una API Rest utilizando Node.js, Express, y el sistema de módulos moderno ES Modules. Se implementa el manejo de parámetros dinámicos (Path Params y Query Params), la configuración de seguridad con CORS, y la captura global de errores para rutas inexistentes (404).

## 🛠️ Paso 1: Inicialización del Entorno y Estructura

Inicializar el proyecto Node.js: Crea la carpeta de tu proyecto, abre la terminal dentro de ella y genera el archivo de configuración base:

```Bash
npm init -y
```

**Habilitar ES Modules:** Abre el archivo package.json recién creado y reemplaza la propiedad "type": "module". Esto le indica a Node.js que utilizaremos import y export en lugar de require.  Aprovecha también para configurar el script de arranque: Agrega,  "start": "node index.js", dentro de scripts.

```JSON
{
  "name": "clase11-ejercicio",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

**Instalar Dependencias de Producción:** Instala el framework Express y el middleware CORS ejecutando:

**NOTA:** Recuerden verificar en la consola estar parados en el directorio correcto.

```Bash
npm install express cors
```

**Configurar el archivo .gitignore:** Crea un archivo llamado .gitignore en la raíz del proyecto para evitar subir archivos pesados e innecesarios al repositorio de Git:

```Plaintext
node_modules/
```

**Crear la estructura de archivos modular:** Organiza tu espacio de trabajo creando las siguientes carpetas y archivos para mantener la separación de responsabilidades:  

```Plaintext
📁 Ejercicio-11/
├── 📁 node_modules/
├── 📁 src/
│   ├── 📁 controllers/
│   │   └── productController.js
│   ├── 📁 models/
│   └── 📁 routes/
│   │    └── productRoutes.js
│   └── 📁 services/
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## 💻 Paso 2: Desarrollo del Código Fuente

1 - El Controlador (src/controllers/productController.js)
Esta capa maneja la lógica de la petición y define de forma exacta qué datos responder al cliente de acuerdo a los parámetros recibidos.

```JavaScript
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
```

2 - El Enrutador (src/routes/productRoutes.js)  
Esta capa intercepta las URLs específicas e invoca al método del controlador que corresponde.

```JavaScript
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
```

3 - El Servidor Principal (index.js)  
Punto de entrada de la aplicación. Configura las herramientas globales, activa la seguridad entre dominios y levanta el servicio en red.

```JavaScript
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
```

## 🧪 Paso 3: Pruebas en POSTMAN

**💡 Resumen rápido de qué usar:**
Si querés la experiencia más fluida y sin dar vueltas: Usá la Desktop App (1).  
Si no querés instalar programas pesados y preferís usar la nube: Usá Postman Web (2) pero instalando obligatoriamente el Desktop Agent (3) en tu PC para que te deje testear tus ejercicios de clase.

Explicación de modo de uso debajo.

## 🚀 El Ecosistema de Postman: Versiones y Usos

Postman se puede utilizar de tres formas diferentes según tus necesidades de desarrollo. Aquí te detallo qué es y cómo se usa cada una:

1 - Postman Desktop App (Aplicación para PC)
Es el programa clásico que descargás e instalás directamente en tu sistema operativo (Windows, Mac o Linux).

Cómo se utiliza: Se ejecuta de forma local como cualquier otro programa de tu computadora (por ejemplo, VS Code). No tiene restricciones de seguridad de navegación, por lo que puede realizar peticiones directamente a `http://localhost:3000`, o el puerto que hayas configurado, sin configuraciones adicionales. Es la opción más robusta y recomendada para el desarrollo diario del backend.  

2 - Postman Web (Versión del Navegador)
Es la plataforma completa de Postman, pero ejecutada directamente desde una pestaña de tu navegador web (Chrome, Firefox, Edge, etc.), ingresando a tu cuenta en la nube.

Cómo se utiliza: Entrás a la web de Postman y trabajás desde ahí. El gran problema: los navegadores web tienen restricciones de seguridad estrictas (llamadas políticas CORS) que te impiden enviar peticiones directas desde una página web externa hacia tu localhost (tu servidor local). Para solucionar esto y poder usar la web para probar tus APIs locales, Postman creó la tercera herramienta.

3 - Postman Desktop Agent (Agente de Escritorio)
Es un pequeño programa o servicio "invisible" (un componente puente) que descargás en tu PC. No tiene una interfaz gráfica con botones como la app completa; se queda corriendo de fondo en la barra de tareas.

Cómo se utiliza: Sirve exclusivamente como intermediario cuando usás Postman Web. Cuando hacés clic en "Enviar" desde el navegador, la web le manda la orden al Desktop Agent que está instalado en tu máquina, y este agente (como corre de forma local) es el que realmente le pega a tu localhost:3000 saltándose las restricciones del navegador.  

Abre Postman e ingresa las siguientes solicitudes de prueba:

Verificación Global del Servidor (GET):

URL: `http://localhost:3000/`

Respuesta: Estado 200 OK. Retorna el JSON de confirmación de salud de la API.

---

Lectura Dinámica por Path Params (GET):

URL: `http://localhost:3000/api/productos/2`

Respuesta: Estado 200 OK. Retorna la información exclusiva del producto con ID 2 (Mouse Gamer).  
Caso de control: Cambia el ID a 99. Debe retornar un estado 404 Not Found informando que el ID no existe en la simulación.

---

Filtrado Flexible por Query Params (GET):

URL: `http://localhost:3000/api/productos?categoria=perifericos&precioMax=30000`

Respuesta: Estado 200 OK. El servidor filtra dinámicamente la lista devolviendo solo los periféricos que cuesten $25.000 o menos.

---

Captura de Endpoints Inexistentes (Middleware 404):

URL: `http://localhost:3000/api/ruta-falsa-cualquiera`

Respuesta: Estado 404 Not Found. El servidor intercepta la petición incorrecta y devuelve un JSON elegante explicando detalladamente qué método y ruta fallaron.

---
