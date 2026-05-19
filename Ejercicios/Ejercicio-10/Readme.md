# 🚀 Cómo ejecutar este ejercicio en tu computadora

Este proyecto es el **Ejercicio Práctico N° 10** y forma parte de mi repositorio de misiones de Node.js + Express. Debido a que las dependencias (`node_modules`) no se suben al repositorio por rendimiento y buenas prácticas, debés seguir estos pasos para hacerlo funcionar localmente.

---

Cuando alguien se descarga (clona) mi repositorio de GitHub, se le descarga una carpeta grande que tiene todas tus misiones adentro.  
La gran contra que tiene GitHub por defecto: no te deja descargar una sola carpeta directamente desde su página web. Si alguien entra a mi repositorio y hace clic en el botón verde de "Download ZIP", se le baja obligatoriamente todo el repositorio entero con todos tus ejercicios juntos.  
Pero como en el mundo de la programación siempre hay un truco para todo, si alguien quiere únicamente la carpeta del Ejercicio 10 sin bajarse el resto, tiene dos opciones espectaculares.  
Podés elegir la que más le guste:

**Opción 1:** El truco web (Usando DownGit)  
Es la forma más fácil para la gente que no quiere tocar la terminal. Existen herramientas web gratuitas que hacen la magia por nosotros. La más famosa y usada se llama DownGit.  

***¿Cómo se usa?***  

La persona entra a tu GitHub y se mete adentro de la carpeta ejercicio-10.  
Copia la URL que aparece en la barra de direcciones del navegador ([ejercicio-10](https://github.com/Mirtyta/NodeJS-Curso/tree/main/Ejercicios/ejercicio-10)).  
Entra a la página web: [Downgit](downgit.github.io)  
Pega ese enlace ahí, le da al botón "Download" y ¡listo! La página le empaqueta y le descarga únicamente esa carpeta en un archivo .zip.  

**Opción 2:** El truco pro de Git (Sparse Checkout)  
Si sos es más técnico y queres usar la terminal de tu máquina para clonar solo esa carpeta sin bajarse todo lo demás, Git tiene un comando especial para eso desde sus últimas versiones.  
Los pasos que tendría que seguir en su terminal son estos:

```Bash
# 1. Inicializa un repositorio vacío en tu compu
git init mi-ejercicio-10
cd mi-ejercicio-10
```

## 2. Vincula tu repositorio de GitHub pero de forma oculta

```Bash
git remote add -f origin https://github.com/Mirtyta/NodeJS-Curso/tree/main/Ejercicios/ejercicio-10
```

## 3. Le dice a Git: "Activá el modo descarga selectiva"

```Bash
git config core.sparseCheckout true
```

## 4. Le define qué carpeta exacta quiere traerse

```Bash
echo "ejercicio-10/" >> .git/info/sparse-checkout
```

## 5. Descarga únicamente esa carpeta

```Bash
git pull origin main
```

## Una vez descargada la carpeta del ejercicio sigue estos pasos

## 🛠️ Pasos para la instalación y ejecución

Para probar este ejercicio 10 en tu entorno local, abrí tu terminal y ejecutá los siguientes comandos paso a paso:

  1 Instalar las dependencias (Reconstruir node_modules)
Este comando leerá el archivo package.json y descargará automáticamente la carpeta node_modules con Express en tu compu:

```Bash
npm install
```

  2 Iniciar el servidor

Una vez que terminó de instalar, levantá el servidor Express ejecutando el script de inicio:

```Bash
npm run start
```

## 🌐 Rutas disponibles para probar

Cuando la terminal te indique que el servidor está corriendo con éxito, abrí tu navegador web y visitá las siguientes direcciones:

Página de Bienvenida (Formato HTML): ```http://localhost:4000/```

Página de ruta html (Formato HTML): ```http://localhost:4000/html```

Listado de Productos (Formato JSON): ```http://localhost:4000/json```

💡 Nota: El servidor está configurado por defecto en el puerto 4000 para evitar conflictos de puertos retenidos en segundo plano.
         Les comparto ésto, porque se que todo es un montón, y no tienen porque bajarse todo, ¿porque lo hago recien aquí?, porque este es un directorio donde utilizo node module. Y porque no lo sabia antes pero lo pueden utilizar con todos los directorios, cariños, nos vemos en la próxima clase...
