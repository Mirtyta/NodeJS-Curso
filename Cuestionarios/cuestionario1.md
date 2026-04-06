¿Cuáles de las siguientes aplicaciones son ideales para ser desarrolladas con Node.js? Pregunta 2Respuesta

👉 Node.js es ideal para cosas en tiempo real y manejo de muchas conexiones (chat, APIs, dashboards)

👉 la C no porque eso es pesado (CPU/GPU), más para otros lenguajes/herramientas

💯 así que: correcto, elegiste bien 😄

¿Cuál es una característica clave del diseño de Node.js? Pregunta 3Respuesta

✔️ c. Orientación a eventos y no bloqueante

👉 esa es LA característica clave de Node.js
todo funciona con eventos y sin bloquear (puede manejar muchas cosas a la vez sin esperar)

las otras:

a ❌ nada que ver, no es solo SQL
b ❌ no tiene integración nativa con Java
d ❌ no es multi-threading clásico sincronizado

💯 así que marcá la C tranquilo
¿Qué motor utiliza Node.js para convertir JavaScript en código máquina? Pregunta 4Respuesta
👉 Node.js usa el motor V8 (el mismo de Chrome) para ejecutar JavaScript

las otras:

SpiderMonkey → Firefox
ChakraCore → viejo motor de Edge
JavaScriptCore → Safari

💯 así que perfecto otra vez 😄

¿Cuáles son ventajas del modelo single-threading de Node.js? Pregunta 5Respuesta

🧠 ¿qué es single-threading?

significa que Node.js usa un solo “hilo” principal
(no hace varias cosas pesadas en paralelo como otros lenguajes)

👉 pero compensa eso siendo no bloqueante
(entonces puede atender muchas cosas sin quedarse esperando)

✅ ventajas reales:

✔️ b. Escalabilidad para manejar miles de conexiones concurrentes
→ sí, porque no se bloquea esperando

✔️ d. Elimina problemas de sincronización entre hilos
→ sí, como no hay varios hilos, no hay conflictos raros

❌ incorrectas:

a. Manejo eficiente de tareas intensivas de CPU → ❌
→ esto es justo lo que peor hace Node

c. Uso óptimo de múltiples núcleos → ❌
→ usa 1 solo hilo principal

🎯 respuesta correcta:
👉 B y D

¿Qué tecnología facilita la comunicación bidireccional en tiempo real en Node.js? Pregunta 6Respuesta
sí, la A (WebSockets) ✅

👉 permite comunicación bidireccional en tiempo real (cliente ↔ servidor todo el tiempo)

las otras:

GraphQL → para consultas de APIs
AJAX → comunicación pero no en tiempo real continuo
JSON → solo formato de datos

💯 perfecta esa también 😄
¿Cuáles de las siguientes tareas se pueden realizar con Node.js fuera del navegador? Pregunta 7Respuesta
sí, perfecto: A, C y D ✅

✔️ a. Trabajar con archivos → sí
❌ b. Manipulación del DOM → no (eso es del navegador)
✔️ c. Bases de datos → sí
✔️ d. Crear servidores → sí

👉 el DOM (Document Object Model) es algo que existe solo en el navegador
(es la representación de la página web: botones, textos, divs, etc.)

👉 en Node.js:

no hay página web
no hay HTML cargado
no existe document

por eso ❌ no podés manipular el DOM

Node.js utiliza un modelo __________ con un event loop, que permite manejar múltiples solicitudes de manera eficiente sin bloquear el hilo principal. Pregunta 8Respuesta
sí, la C (single-threading) ✅

👉 frase completa:
“Node.js utiliza un modelo single-threading con un event loop…”

💡 eso es lo que vimos antes:

un solo hilo
pero con event loop → maneja muchas cosas sin bloquear

🔹 a. multi-threading

👉 significa varios hilos trabajando al mismo tiempo

💡 ejemplo:

un hilo procesa una cosa
otro hilo otra
y así en paralelo

✔️ bueno para tareas pesadas (CPU)
❌ más complejo (pueden chocar entre sí → sincronización)

👉 nativamente (por defecto):

Node.js = single-thread ✅

👉 pero si querés:

podés hacerlo trabajar con varios hilos usando:
Worker Threads
Cluster

💡 pero ojo con esto (clave para el examen):
la pregunta apunta al modelo base de Node.js, no a lo que puede hacer extra

🎯 entonces:

“¿puede usar varios hilos?” → sí
“¿su modelo principal es multi-threading?” → no


🔹 b. threshold

👉 esto medio trampa 😅

“threshold” = umbral / límite

💡 ejemplo:

“si pasa cierto valor → hacer algo”

👉 no tiene nada que ver con cómo funciona Node.js
por eso es incorrecta

🔹 c. single-threading (la correcta)

👉 un solo hilo principal
✔️ simple
✔️ menos errores raros
✔️ ideal para muchas conexiones

🎯 resumen rápido:

multi-threading → varios hilos (potente pero complejo)
single-threading → un hilo (simple + eficiente con event loop)
threshold → nada que ver acá


El módulo ..... de Node.js permite manipular el sistema de archivos, mientras que el módulo .... facilita la creación de servidores HTTP.

👉 fs → para trabajar con archivos
👉 http → para crear servidores

Node.js es un entorno en tiempo de ejecución basado en el motor ... de Google, diseñado para ser ligero y ... , ideal para aplicaciones en tiempo real.

👉 V8 → correcto
👉 eficiente → correcto también

💯 frase completa:
“Node.js es un entorno en tiempo de ejecución basado en el motor V8 de Google, diseñado para ser ligero y eficiente…”

El concepto de .... en Node.js se refiere a la capacidad de manejar tareas como lectura/escritura en archivos o solicitudes HTTP sin bloquear el .... principal.

👉 no bloqueante
👉 hilo

💯 frase completa:
“…capacidad de manejar tareas… sin bloquear el hilo principal”