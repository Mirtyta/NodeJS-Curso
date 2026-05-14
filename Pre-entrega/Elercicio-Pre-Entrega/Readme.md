# Proyecto: Gestión de Productos (CLI) - TechLab

## 👩‍💻 Alumna: Mirta Gómez

**Curso:** Programación con Node.js  
**Objetivo:** Desarrollar una herramienta de línea de comandos (CLI) que permita interactuar con una API (MockAPI) para realizar operaciones CRUD (Get, Post, Delete).

---

## 🚀 Descripción del Proyecto

Este programa permite gestionar un catálogo de productos de forma interactiva desde la terminal. Utiliza **Node.js** nativo y se comunica con una API externa. Se puso especial énfasis en la **seguridad del usuario** (confirmación de borrado) y en la **limpieza visual** de los datos.

---

## 🛠️ Tecnologías y Módulos Utilizados

Se utilizaron exclusivamente módulos nativos de Node.js:

1. **node:process**: Para capturar los argumentos de la terminal (`process.argv`).
2. **node:readline**: Para la interfaz interactiva de confirmación de borrado.
3. **Fetch API**: Para peticiones HTTP hacia MockAPI.

---

## 💻 Instalación y Uso

1. Clonar el proyecto.
2. Abrir la terminal en la carpeta raíz.

### Comandos de Ejemplo

* **Listar todo:** `npm run start -s GET products`
* **Ver uno:** `npm run start -s GET products/1`
* **Crear:** `npm run start -s POST products "Remera Verde" 1500 "Ropa"`
* **Borrar:** `npm run start -s DELETE products/5`

**Nota:** Usamos el flag `-s` (silent) para que npm no muestre mensajes de log y la salida de la tabla sea totalmente limpia.

---

## 🧠 Resolución y Desafíos

* **Tipos de Datos:** Uso de `parseFloat()` para asegurar que los precios sean números.
* **Visualización:** Se usó `console.table()` con objetos mapeados para ocultar la columna `index` y mostrar el `ID` real.
* **Seguridad:** Implementación de promesas con `readline` para evitar eliminaciones accidentales.

---

## 📂 Estructura de Archivos

* `index.js`: Código principal.
* `package.json`: Scripts y configuración.
* `README.md`: Documentación.
* `.gitignore`: Filtro de archivos para Git.
