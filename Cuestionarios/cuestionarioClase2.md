# 💬 CUESTIONARIO CLASE 2:


⚠️ Recuerda: 
que el cuestionario no sigue siempre el mismo orden,  ni de las preguntas, ni de las respuestas, busca la pregunta y verás la respuesta correcta y en algunos casos el argumento o la informacion de porqué las otras no son correctas.

---
## Pregunta 1
Enunciado de la pregunta  
**El concepto de [ ]en Node.js se refiere a la capacidad de manejar tareas como lectura/escritura en archivos o solicitudes HTTP sin bloquear el [ ]   principal.**

***La respuesta correcta es:  
El concepto de [**no bloqueante**] en Node.js se refiere a la capacidad de manejar tareas como lectura/escritura en archivos o solicitudes HTTP sin bloquear el [**hilo**] principal.***

---
## Pregunta 2
Enunciado de la pregunta  
**¿Cuáles de las siguientes aplicaciones son ideales para ser desarrolladas con Node.js?**

Respuestas:   
 Aplicaciones de chat en tiempo real.   
 APIs RESTful escalables.   
 Sistemas de edición de video.   
 Dashboards de monitoreo en tiempo real.   

***Las respuestas correctas son:   
Aplicaciones de chat en tiempo real., Dashboards de monitoreo en tiempo real., APIs RESTful escalables.***

👉 Node.js es ideal para cosas en tiempo real y manejo de muchas conexiones (chat, APIs, dashboards)

---
## Pregunta 3
Enunciado de la pregunta
**¿Cuál es una característica clave del diseño de Node.js?**

Respuestas:   
Soporte exclusivo para bases de datos SQL.   
Integración nativa con Java.   
Orientación a eventos y no bloqueante.   
Modelo multi-threading sincronizado.   

***La respuesta correcta es:   
Orientación a eventos y no bloqueante.***

Retroalimentación:   
👉 esa es LA característica clave de Node.js  
todo funciona con eventos y sin bloquear (puede manejar muchas cosas a la vez sin esperar)

las otras:  
❌ nada que ver, no es solo SQL  
❌ no tiene integración nativa con Java  
❌ no es multi-threading clásico sincronizado, no nativamente  

---
# Pregunta 4
Enunciado de la pregunta
**¿Qué motor utiliza Node.js para convertir JavaScript en código máquina?**

Respuestas:  
V8   
SpiderMonkey   
ChakraCore   
JavaScriptCore   

***La respuesta correcta es:   
V8***

Retroalimentación:   
¡Correcto! Node.js utiliza el motor V8 de Google, el mismo que usa Chrome.   
las otras:  
SpiderMonkey → Firefox  
ChakraCore → viejo motor de Edge  
JavaScriptCore → Safari  

---
## Pregunta 5
Enunciado de la pregunta   
**¿Cuáles son ventajas del modelo single-threading de Node.js?**

Respuestas:  
Manejo eficiente de tareas intensivas de CPU.   
Escalabilidad para manejar miles de conexiones concurrentes.   
Uso óptimo de múltiples núcleos de CPU.   
Elimina problemas de sincronización entre hilos.   

***Las respuestas correctas son:   
Escalabilidad para manejar miles de conexiones concurrentes., Elimina problemas de sincronización entre hilos.***

Retroalimentación:  
 🧠 ¿qué es single-threading?   
significa que Node.js usa un solo “hilo” principal
(no hace varias cosas pesadas en paralelo como otros lenguajes)

👉 pero compensa eso siendo no bloqueante
(entonces puede atender muchas cosas sin quedarse esperando)

✅ ventajas reales:  
✔️ Escalabilidad para manejar miles de conexiones concurrentes
→ sí, porque no se bloquea esperando   
✔️ Elimina problemas de sincronización entre hilos
→ sí, como no hay varios hilos, no hay conflictos raros   

❌ incorrectas:  
Manejo eficiente de tareas intensivas de CPU → ❌
→ esto es justo lo que peor hace Node  
Uso óptimo de múltiples núcleos → ❌
→ usa 1 solo hilo principal

---
## Pregunta 6
Enunciado de la pregunta: 
**¿Qué tecnología facilita la comunicación bidireccional en tiempo real en Node.js?**

Respuestas:   
WebSockets   
GraphQL   
AJAX   
JSON   

***La respuesta correcta es:   
WebSockets***

Retroalimentación:    
sí, (WebSockets) ✅   
👉 permite comunicación bidireccional en tiempo real (cliente ↔ servidor todo el tiempo)  

las otras:  
GraphQL → para consultas de APIs   
AJAX → comunicación pero no en tiempo real continuo   
JSON → solo formato de datos   

---
## Pregunta 7
Enunciado de la pregunta:   
**¿Cuáles de las siguientes tareas se pueden realizar con Node.js fuera del navegador?**

Respuestas:   
Trabajar con archivos del sistema.   
Manipulación del DOM.   
Acceso a bases de datos.   
Creación de servidores web.   

***Las respuestas correctas son:   
Creación de servidores web., Acceso a bases de datos., Trabajar con archivos del sistema.***

Retroalimentación:   
✔️ Trabajar con archivos → sí
❌ Manipulación del DOM → no (eso es del navegador)
✔️ Bases de datos → sí
✔️ Crear servidores → sí

👉 el DOM (Document Object Model) es algo que existe solo en el navegador
(es la representación de la página web: botones, textos, divs, etc.)   

👉 en Node.js:   
no hay página web   
no hay HTML cargado   
no existe document   

por eso ❌ no podés manipular el DOM   

---
## Pregunta 8
Enunciado de la pregunta:   
**Node.js utiliza un modelo __________ con un event loop, que permite manejar múltiples solicitudes de manera eficiente sin bloquear el hilo principal.**

Respuestas:  
multi-threading  
threshold   
single-threading   

***La respuesta correcta es:   
single-threading*** 

Retroalimentación:   
un solo hilo
pero con event loop → maneja muchas cosas sin bloquear

🔹 multi-threading

👉 significa varios hilos trabajando al mismo tiempo   
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

🔹 threshold   
👉 esto medio trampa 😅   
“threshold” = umbral / límite   

👉 no tiene nada que ver con cómo funciona Node.js   
por eso es incorrecta   

🔹 single-threading (la correcta)   
👉 un solo hilo principal   
✔️ simple   
✔️ menos errores raros   
✔️ ideal para muchas conexiones   

🎯 resumen rápido:   

multi-threading → varios hilos (potente pero complejo)   
single-threading → un hilo (simple + eficiente con event loop)   
threshold → nada que ver acá   

---
## Pregunta 9
Enunciado de la pregunta:  
**El módulo [ ] de Node.js permite manipular el sistema de archivos, mientras que el módulo [ ] facilita la creación de servidores HTTP.**

***La respuesta correcta es:   
El módulo [**fs**] de Node.js permite manipular el sistema de archivos, mientras que el módulo [**http**] facilita la creación de servidores HTTP.***

---
## Pregunta 10
Enunciado de la pregunta:  
**Node.js es un entorno en tiempo de ejecución basado en el motor [ ] de Google, diseñado para ser ligero y [ ] , ideal para aplicaciones en tiempo real.**

***La respuesta correcta es:   
Node.js es un entorno en tiempo de ejecución basado en el motor [V8] de Google, diseñado para ser ligero y [eficiente], ideal para aplicaciones en tiempo real.***

---

Espero les haya sido de utilidad, nos vemos en el siguiente cuestionario Mirty 

---