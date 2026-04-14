# 💬 CUESTIONARIO CLASE 6:

# ⚠️ Recuerda:   
que el cuestionario no sigue siempre el mismo orden,  ni de las preguntas, ni de las respuestas, busca la pregunta y verás la respuesta correcta y en algunos casos el argumento o la informacion de porqué las otras no son correctas.

--- 

# Pregunta: En JavaScript, las promesas pueden tener dos estados finales: [  ] cuando la tarea se completa exitosamente, y [  ] cuando ocurre un error.

## La respuesta correcta es: En JavaScript, las promesas pueden tener dos estados finales: [resolved] cuando la tarea se completa exitosamente, y [rejected] cuando ocurre un error.

---
# Pregunta: ¿Qué método de una promesa se ejecuta al finalizar la promesa, independientemente de si se resolvió o rechazó?

Respuestas

a. .catch()   
b. .then()   
c. .resolve()   
d. .finally()   

## La respuesta correcta es: .finally()

a. .catch(): Solo se activa si la promesa es rechazada (hubo un error). Si todo sale bien, este método ni se entera.   
b. .then(): Solo se activa si la promesa es exitosa. Si hay un error, el código se salta este paso para ir al catch.   
c. .resolve(): No es un método que se "engancha" al final de una promesa para escuchar el resultado; es una función que se usa para crear o forzar que una promesa sea exitosa.   

---
# Pregunta: En el uso de Fetch, para manejar una solicitud [  ] con un cuerpo de datos, se puede agregar un objeto de configuración con la propiedad method configurada como [  ]. Este objeto también puede incluir el encabezado Content-Type para especificar el tipo de los datos, y la propiedad body con los datos a enviar, que deben estar en formato  .

## La respuesta correcta es: En el uso de Fetch, para manejar una solicitud "POST" con un cuerpo de datos, se puede agregar un objeto de configuración con la propiedad method configurada como "[POST]". Este objeto también puede incluir el encabezado Content-Type para especificar el tipo de los datos, y la propiedad body con los datos a enviar, que deben estar en formato [JSON].

---
# Pregunta: ¿Qué método de una promesa se utiliza para manejar errores?

Respuesta

a. finally()   
b. resolve()   
c. then()   
d. catch()   

## La respuesta correcta es: catch()   

a. finally(): Se ejecuta siempre, sin importar si hubo error o éxito. No sirve para "gestionar" el error, solo para tareas de limpieza final.   
b. resolve(): No es para manejar errores; es lo que se llama para indicar que la promesa se cumplió exitosamente.   
c. then(): Se encarga del flujo positivo. Si ocurre un error, el código "salta" por encima de los .then() buscando un catch.   

---
# Pregunta: ¿Cuál de las siguientes afirmaciones sobre la diferencia entre Fetch y Axios es correcta?   

Respuesta

a. Fetch tiene más opciones para manejar errores que Axios.
b. Axios convierte automáticamente las respuestas en JSON, mientras que Fetch requiere hacerlo manualmente.
c. Axios solo funciona en navegadores modernos.
d. Axios es más lento que Fetch.

## La respuesta correcta es: Axios convierte automáticamente las respuestas en JSON, mientras que Fetch requiere hacerlo manualmente.

a. Fetch tiene más opciones para manejar errores: Al contrario, Axios suele ser preferido porque detecta errores de status (como el 404 o 500) y te manda directo al catch. En Fetch, como vimos, tenés que hacerlo vos con el if (!response.ok).   
c. Axios solo funciona en navegadores modernos: Falso. Una de las razones por las que se creó Axios fue justamente para dar soporte a navegadores más antiguos (como Internet Explorer) de forma más sencilla que Fetch.   
d. Axios es más lento que Fetch: No hay una diferencia de velocidad notable para el usuario. La diferencia es de comodidad para el programador, no de rendimiento del motor de JavaScript.

---
# Pregunta: ¿Qué método de Fetch se utiliza para convertir una respuesta a formato JSON?

Respuesta

a. .text()
b. .xml()
c. .parse()
d. .json()

## La respuesta correcta es: .json()   

a. .text(): Se usa si la API te devuelve texto plano (un string común) en lugar de un objeto estructurado.   
b. .xml(): No existe como método directo de Fetch. Para procesar XML se suelen usar otras herramientas como DOMParser.   
c. .parse(): Es muy común confundirse con esta. El método es JSON.parse(), pero es una función global de JavaScript, no un método que se le aplica directamente a la respuesta (response) de un Fetch.   

---
# Pregunta: ¿Cuál de los siguientes describe correctamente el funcionamiento del Event Loop en JavaScript?

Respuesta

a. Bloquea la ejecución del código hasta que se completa una tarea asincrónica.   
b. Se encarga de ejecutar las funciones de la Callback Queue cuando la Call Stack está vacía. 
c. Ejecuta todas las funciones sincrónicas de manera simultánea.   
d.  Llama a las funciones en la Call Stack en orden aleatorio.   

## La respuesta correcta es: Se encarga de ejecutar las funciones de la Callback Queue cuando la Call Stack está vacía.

a. Bloquea la ejecución...: ¡Al contrario! El Event Loop existe para que JS no se bloquee. Mientras una tarea asincrónica espera, el código sigue corriendo.  
c. Ejecuta funciones sincrónicas simultáneamente: Falso. JS ejecuta una sola cosa por vez. No hay "simultaneidad" real en la cocina (Stack).  
d. Orden aleatorio: Jamás. JS es súper ordenado. Usa una estructura llamada FIFO (First In, First Out): el primero que llega a la fila de espera es el primero en ser atendido.

---
# Pregunta: ¿Cuál es la principal ventaja del asincronismo en JavaScript?  
a. Reducir el número de líneas de código.   
b. Ejecutar el código de manera síncrona.   
c. Ejecutar todo el código en un solo hilo.   
d. Permitir que las tareas de larga duración no bloqueen el programa principal.   

## La respuesta correcta es: Permitir que las tareas de larga duración no bloqueen el programa principal.

a. Reducir líneas de código: Al contrario, a veces el asincronismo (especialmente con promesas o callbacks) hace que el código sea un poco más largo o complejo de escribir.   
b. Ejecutar el código de manera síncrona: Esto es justamente lo opuesto. Lo síncrono es lo que "bloquea" (una cosa atrás de la otra); lo asíncrono busca evitar esa fila india.   
c. Ejecutar todo el código en un solo hilo: Esto no es una ventaja, es una limitación de JavaScript (es single-threaded). El asincronismo es la solución ingeniosa para que esa limitación no nos arruine la experiencia de usuario.   

---
# Pregunta: ¿Qué hace la función fetch() en JavaScript?

Respuesta

a. Crea una promesa que siempre se resuelve exitosamente.   
b. Realiza una solicitud HTTP a un servidor web.   
c. Ejecuta un bloque de código asíncrono.   
d. Envía datos a una base de datos local.  

## La respuesta correcta es: Realiza una solicitud HTTP a un servidor web.

a. Crea una promesa que siempre se resuelve exitosamente: Como ya aprendiste, la promesa de fetch() puede ser rechazada si hay problemas de red (como quedarte sin internet). No es éxito garantizado.   
c. Ejecuta un bloque de código asíncrono: Si bien fetch es una operación asíncrona, su función específica no es "ejecutar bloques de código" (eso lo hacen las funciones o los bloques try), sino hacer una petición.    
d. Envía datos a una base de datos local: fetch se usa para servidores externos o APIs (vía red). Para bases de datos locales (como LocalStorage o IndexedDB), JavaScript usa otros métodos que no requieren una solicitud HTTP.   

---
# Pregunta: ¿Qué palabra clave se usa para declarar una función asincrónica en JavaScript?

Respuesta

a.  promise  
b.  async  
c.  callback  
d.  await  

## La respuesta correcta es: async

a. promise: Es el objeto que representa el resultado de la tarea, no una palabra para declarar funciones.   
c. callback: Es un concepto (pasar una función como argumento a otra), no una palabra reservada del lenguaje para definir asincronismo moderno.   
d. await: Esta es la que más confunde. await se usa adentro de la función para pausar la ejecución, pero no sirve para declararla. Sin el async al principio, no podés usar el await adentro.   

---

Espero les haya sido de utilidad, nos vemos en el siguiente cuestionario Mirty 

---

