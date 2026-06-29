# Ejercicio Nº12

Pasos para hacer el ejercicio

## Paso 1 - Creamos la carpeta del nuevo proyecto (podés ponerle el nombre que quieras)

```Bash
mkdir proyecto-clase-12
```

## Paso 2 - Nos metemos adentro de la carpeta que acabamos de crear

```Bash
cd proyecto-clase-12
```

## Paso 3 - Iniciamos el proyecto de Node.js (el -y es para que cree el package.json por defecto)

```Bash
npm init -y
```

## Paso 4 - Generamos la estructura de directorios de nuestro proyecto

```Plaintext
📁 Ejercicio-14/
├── 📁 node_modules/                // cuando instalamos las dependencias este directorio se crea solo
├── 📁 public/                      // carpeta de publica
│   │   └── favicon.ico             // archivo de icono 
├── 📁 src/                         // carpeta de proyecto
│   ├── 📁 controllers/             // carpeta de controladores
│   │   └── products.Controller.js  // archivo de controladores
│   ├── 📁 data/                    // carpeta de datos
│   │   └── products.json           // archivo productos generado con seed.js
│   ├── 📁 models/                  // Carpeta de modelos
│   │   └── products.models.js     // archivo de modelos
│   └── 📁 routes/                  // Carpeta de rutas
│   │    └── products.Routes.js     // archivo de rutas
│   └── 📁 services/                // Carpeta de servicios
│   │    └── products.service.js    // archivo de servicios
├── api.http                       // Archivo para solicitudes REST Client
├── .gitignore                      // Archivo para GitHub, para que ignore la subida a Repositorio
├── index.js                        // Archivo principal de la app
├── package.json                    // Lista de dependencias
└── package-lock.json               // Lista de dependencias instaladas con sus versiones
└── seed.js                         // archivo para generar datos de ejemplo en la base
```

## Paso 5 - instalamos las dependencias

Instalamos Express, CORS y Dotenv

```Bash
npm install express cors dotenv
```

**Nota:** Se crea el directorio Modules

## Paso 6 - Configurar el Tipo de Módulo

  1 - Abrí el archivo package.json que se generó en la raíz de tu proyecto.

  2 -Cambiar la línea   "type": "commonjs", por "type": "module", y agregar en scripts `"start": "node index.js"

Te tendría que quedar algo así:

```Bash
{
  "name": "proyecto-clase-12",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",             // tipo module para utilizar Import en nuestro proyecto
  "scripts": {
    "start": "node index.js"    // agregar start
  },
  ...
```

## Paso 7 - Crear la Carpeta Pública y el Icono (favicon.ico)

Cuando levantás una API y entrás desde el navegador (por ejemplo a la ruta raíz), este siempre intenta pedir automáticamente el archivo /favicon.ico para mostrar en la pestaña. Si no lo encuentra, tira un error 404 horrible en la consola.

**Para solucionarlo:**

* Creá una carpeta llamada public en la raíz de tu proyecto (al mismo nivel que src y package.json).

* Meté adentro de esa carpeta tu archivo de icono con el nombre favicon.ico.

* En el index.js le avisamos a Express que sirva esos archivos estáticos.

## Paso 8 - Opcionales para instalar

### Pruebas de Endpoints con REST Client

Para testear nuestras rutas de forma rápida y sin salir de VS Code, incorporamos el archivo `api.http`. Este archivo reemplaza el uso de herramientas externas como Postman, permitiendo ejecutar peticiones HTTP directamente desde el editor de código.

### 🛠️ Pasos para instalar y usar REST Client

Esta herramienta funciona mediante una extensión propia de VS Code. Seguí estos pasos para configurarla:

1. Ir a la pestaña de **Extensiones** en VS Code (`Ctrl + Shift + X` o `Cmd + Shift + X` en Mac).
2. Buscar la extensión **"REST Client"** del autor **Huachao Mao** e instalarla.
3. Asegurarte de que el servidor esté corriendo en tu terminal (`npm run dev`).
4. Abrir el archivo `api.http` que se encuentra en la raíz de nuestro proyecto.
5. Verás que mágicamente aparece un botón que dice `Send Request` justo arriba de cada método (`GET`, `POST`, `PUT`, `DELETE`).
6. Hacé clic en `Send Request` sobre cualquier endpoint y se abrirá una pestaña al lado con la respuesta detallada en formato JSON que devuelve nuestra API.

### 💡 Tip de uso para las Variables en `api.http`

En la parte superior del archivo `api.http` definimos variables como `@productoId`. Cuando crees un producto nuevo, copiá el ID, pegalo ahí arriba y vas a poder probar las rutas de obtener por ID, actualizar y eliminar de forma automática sin tener que andar reescribiendo la URL en cada petición.

Para no depender de Postman y probar todo directo desde VS Code con la extensión REST Client, creá un archivo llamado api.http en la raíz de tu proyecto y pegale esto:

```HTTP
### NOTA: Para utilizar este archivo directamente en el editor VS Code, 
### debe instalar la extensión "REST Client" del autor Huachao Mao.
### los send Request son las letras muy pequeñas, al pasar el mouse por encima se vuelve azul el texto.

### CONFIGURACIÓN DE VARIABLES LOCALES
@hostname = http://localhost:3000
@productoId = INGRESAR_NUMERO_ID_PRODUCTO
@categoria = perifericos
@precioMax = 35000

### 1. Ruta Home / Bienvenida (Navegador)
GET {{hostname}}/

### 2. Obtener todos los productos (Público)
GET {{hostname}}/api/products

### 3. Obtener un producto específico por ID (Público)
GET {{hostname}}/api/products/{{productoId}}

### 4. Filtrar por precio y categoría (Público filtrado con all)
GET {{hostname}}/api/products?category={{categoria}}&price={{precioMax}}

### 4. Filtrar por precio y categoría (Público filtrado con filter)
GET {{hostname}}/api/products/filter?category={{categoria}}&price={{precioMax}}

### 5. Crear un producto (Público por ahora)
POST {{hostname}}/api/products
Content-Type: application/json

{
    "name": "Teclado Mecánico Pro",
    "price": 45000,
    "category": "perifericos",
    "stock": 15,
    "description": "Teclado gamer con switches azules y luces RGB custom",
    "imageUrl": "https://link-a-imagen.com/teclado.jpg"
}

### 6. Actualizar un producto por ID (Público por ahora)
PUT {{hostname}}/api/products/{{productoId}}
Content-Type: application/json

{
    "price": 49000,
    "stock": 12
}

### 7. Eliminar un producto (Público por ahora)
DELETE {{hostname}}/api/products/{{productoId}}
```

## 📊 Monitoreo de Peticiones con Morgan

Para este proyecto incorporamos **Morgan**, que es un middleware de registro (*logger*) para Node.js. Su función principal es espiar las peticiones HTTP que llegan a nuestro servidor y mostrarlas detalladamente en la consola en tiempo real (mostrando el método, la ruta, el código de estado y el tiempo de respuesta).

### 🛠️ Pasos para instalar y usar Morgan en desarrollo

Si te bajaste el proyecto y querés que funcione en tu máquina, seguí estos pasos:

1. Instalar la dependencia en la carpeta raíz del proyecto ejecutando: `npm install morgan`
2. Asegurarte de que esté importada en el archivo `index.js` mediante: `import morgan from 'morgan';`
3. Inicializar el middleware debajo de los archivos estáticos usando: `app.use(morgan('dev'));`
4. Levantar el servidor de desarrollo ejecutando en la terminal: `npm run dev`

**Una vez activo, cada vez que envíes una petición desde el archivo `api.http` usando la extensión **REST Client**, verás impreso en la consola el registro detallado del tráfico sin necesidad de llenar nuestros controladores con `console.log()` manuales.**

## Reinicio Automático del Servidor con Nodemon

Para mejorar nuestra velocidad de desarrollo incorporamos **Nodemon**. Es una herramienta que monitorea los archivos de nuestro proyecto. Cada vez que detecta que guardamos un cambio en el código, reinicia el servidor de Express automáticamente en la terminal.

### 🛠️ Pasos para instalar y configurar Nodemon

Nodemon es una herramienta de desarrollo, lo que significa que solo la necesitamos mientras estamos programando (no cuando la app ya está subida a internet). Seguí estos pasos para configurarla:

1. Instalar la librería como dependencia de desarrollo ejecutando en la terminal: `npm install --save-dev nodemon`
2. Abrir el archivo `package.json` de la raíz y buscar la sección de `"scripts"`.
3. Agregar el comando de desarrollo para que quede estructurado de la siguiente manera:

  ```json
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
  ```

## Paso 9 - Generar los archivos del proyecto

Debajo tienes el detalle de las capas, archivos y sus responsabilidades, si haces click en el nombre del archivo se abrirá el archivo y podras verlo completo y documentado.

## detalle de cada capa y archivo

Este enfoque separa las tareas para que, si algo falla o cambia (por ejemplo, si mañana cambian Firebase por otra base de datos), solo tengas que tocar una carpeta y el resto del código siga funcionando intacto.

Aquí tenés el desglose archivo por archivo, de afuera hacia adentro:

## 1. Raíz del Proyecto (Configuración Global)

* p[ackage.json](./package.json)

  * Responsabilidad: Es la cédula de identidad de tu proyecto. Le dice a Node.js cómo se llama el proyecto, qué scripts ejecutar (como npm start) y lista todas las librerías externas (dependencias) que necesita la app para funcionar (Express, CORS, etc.).

* [index.js](./index.js)

  * Responsabilidad: Es el Director de Orquesta y el punto de entrada de la aplicación. Su única tarea es levantar el servidor Express, aplicar configuraciones globales (como los permisos de CORS y poder leer JSON) y decirle al servidor qué rutas escuchar. No maneja lógica de negocio ni sabe qué es un producto.

## 2. Capa de Rutas (src/rutas/)

* [products.Routes.js](./src/routes/products.Routes.js)

  * Responsabilidad: Es el Mesa de Entradas / Recepcionista de tu API. Su única función es definir qué URLs existen (ej: GET /products, DELETE /products/:id) y qué métodos HTTP las activan.

  * Enfoque limpio: Cuando llega una petición, la ruta no la resuelve; simplemente dice: "Ah, querés borrar un producto? Dirigite con el Controlador de productos".

## 3. Capa de Controladores (src/controladores/)

* [products.Controller.js](./src/controllers/products.Controller.js)

  * Responsabilidad: Es el Traductor e Intermediario entre el mundo exterior (la petición HTTP) y tu lógica interna.

**¿Qué hace exactamente?:**

* Recibe los datos que manda el usuario (desde la URL con req.params, de los filtros con req.query, o del formulario con req.body).

* Valida que esos datos existan (ej: if (!id) { ... }).

* Llama a la capa de Servicios para que haga el trabajo pesado.

* Recibe la respuesta del Servicio y decide qué responderle al cliente (ej: un estatus 200 si todo salió bien, o un 404/500 si hubo un error).

## 4. Capa de Servicios (src/servicios/)

* [products.service.js](./src/services/products.service.js)

  * Responsabilidad: Es el Cerebro / Lógica de Negocio. Aquí es donde vive la inteligencia de tu aplicación.

**¿Qué hace exactamente?:**

El controlador sólo le pasa datos limpios, y el servicio decide qué hacer con ellos. Por ejemplo, en este archivo es donde hiciste la lógica de filtrar los productos por precio menor o igual y por categoría. Al servicio no le importa si los datos vienen de una web, de Postman o de una app móvil; él solo procesa datos y devuelve resultados.

## 5. Capa de Modelos y Datos (src/modelos/ y src/data/)

* [products.json](./src/data/products.json)

  * Responsabilidad: la base de datos.

* [products.models.js](./src/models/products.models.js)

  * Responsabilidad: Es el Especialista en la Base de Datos. Contiene las funciones genéricas (getDocs, addDoc, deleteDoc).

**Ventaja:**

Si el día de mañana eligen usar otra base de datos (como Supabase o MongoDB), las capas de arriba (Rutas, Controlador, Servicio) no se enteran. Solo cambiás este archivo de modelos para que se conecte a la nueva base de datos y listo.

## 💡 Resumen del flujo (El viaje de una petición)

* Si ejecutan un DELETE /products/123 en Postman, el viaje es el siguiente:

* index.js recibe la petición y la deriva.

* products.routes.js ve que es un DELETE con un ID y llama al controlador.

* products.controller.js agarra el ID (123), revisa que no esté vacío y se lo pasa al servicio.

* products.service.js toma el ID y le pide al modelo que ejecute el borrado.

* products.models.js va a la base datos y borra el documento.

* La respuesta vuelve en sentido contrario hasta que el controlador manda el JSON { "message": "Producto eliminado" }.
