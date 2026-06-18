# 💬 CUESTIONARIO CLASE 10

## ⚠️ Recuerda

que el cuestionario no sigue siempre el mismo orden,  ni de las preguntas, ni de las respuestas, busca la pregunta y verás la respuesta correcta y en éste caso agregue los argumento,  o la informacion de porqué las otras no son correctas.

---

## Pregunta Los controladores en una API Rest son responsables de

a. Almacenar los archivos estáticos de la aplicación  
b. Definir la estructura de los datos  
**c. Responder a las solicitudes recibidas desde las rutas**  
d. Configurar las conexiones con la base de datos  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
c. Responder a las solicitudes recibidas desde las rutas: En la arquitectura de una API REST (y bajo el patrón MVC - Modelo-Vista-Controlador), los controladores actúan como los intermediarios directos entre las rutas (los endpoints que el cliente invoca, como /usuarios o /productos) y la lógica de negocio o de datos. Su función principal es recibir la solicitud de la ruta, procesarla (o delegar el procesamiento) y retornar la respuesta adecuada (por ejemplo, un estado HTTP 200 con un JSON o un error 404).

Por qué las demás opciones son incorrectas:  
a. Almacenar los archivos estáticos de la aplicación: Esto es incorrecto porque el almacenamiento y servicio de archivos estáticos (como imágenes, CSS o archivos JavaScript del frontend) usualmente se delega a un middleware específico de archivos estáticos (como express.static en Node.js) o a servidores web como Nginx o Apache, no a los controladores de la API.

b. Definir la estructura de los datos: Esta responsabilidad le corresponde a los Modelos (o esquemas, si usas herramientas como Mongoose o Sequelize). Los modelos definen qué campos tienen los datos, sus tipos y sus validaciones antes de interactuar con la base de datos.

c. Configurar las conexiones con la base de datos: La configuración y el establecimiento de la conexión con la base de datos se realiza en un módulo o archivo de configuración inicial de la aplicación (por ejemplo, un archivo database.js o config.js), generalmente utilizando variables de entorno, y se ejecuta al arrancar el servidor, quedando fuera del flujo directo de un controlador.

## Pregunta En la estructura de archivos de una API Rest con Node y Express, la carpeta ``[ ]`` captura las peticiones a nuestra API, mientras que la carpeta ``[ ]`` define qué se debe responder a cada una de ellas

**Retroalimentación**  
La respuesta correcta es:  
La carpeta routes es la "puerta de entrada" de las peticiones HTTP (GET, POST, PUT, DELETE). Su única función es capturar esa petición que llega a una URL específica (por ejemplo, /api/users) y pasársela al encargado de resolverla.

La carpeta controllers contiene las funciones que reciben esa petición delegada por la ruta. Aquí se procesa la lógica y se define qué se debe responder (enviando el estado HTTP y los datos en formato JSON, por ejemplo).

Por qué no funcionaría al revés:  
Si invirtiéramos el orden, estaríamos rompiendo el patrón de diseño. Los controladores no tienen la capacidad nativa de escuchar los endpoints del servidor web; necesitan que el enrutador de Express (express.Router()) intercepte primero la URL y el método HTTP para luego disparar la función correspondiente del controlador.

## Pregunta Los modelos en una API Rest

a.Definen las URL de acceso a los recursos  
b. Manejan todas las validaciones de datos de la aplicación  
c. Son exclusivamente para bases de datos NoSQL  
**d. Describen cómo deben verse los datos y cómo interactúan con la base de datos**  

**Retroalimentación**  
Argumentación de por qué la D es la correcta:  
d. Describen cómo deben verse los datos y cómo interactúan con la base de datos: La responsabilidad principal del Modelo (la "M" de MVC) es representar la estructura de los datos de tu negocio (el esquema, las propiedades, los tipos de datos) y comunicarse directamente con el motor de la base de datos (ya sea a través de un ORM como Sequelize o un ODM como Mongoose). El modelo sabe qué campos existen (por ejemplo: nombre: String, edad: Number) y expone los métodos para hacer el CRUD (crear, leer, actualizar, borrar) en la base de datos.

**Por qué las demás opciones son incorrectas:**  
a. Definen las URL de acceso a los recursos: Como vimos en el ejercicio anterior, esta es la responsabilidad única y exclusiva de las Rutas (routes). El modelo no sabe ni le interesa qué URL usa el cliente para pedir los datos.  

b. Manejan todas las validaciones de datos de la aplicación: Aunque es cierto que los modelos realizan validaciones (por ejemplo, comprobar si un email es válido o si un campo es obligatorio antes de guardarlo en la base de datos), la palabra clave aquí es "todas".
En una API REST robusta, las validaciones se dividen en capas. Existen validaciones de formato y de entrada que se hacen mucho antes de llegar al modelo, usando middlewares (como Joi o express-validator) directamente en las rutas o controladores (por ejemplo, verificar que los campos obligatorios vengan en el JSON de la petición). Si dejamos todas las validaciones exclusivamente en el modelo, la arquitectura se vuelve pesada y la API podría fallar muy tarde en el flujo de la petición.  

c. Son exclusivamente para bases de datos NoSQL: Esto es falso. Los modelos existen tanto para bases de datos relacionales/SQL (donde definen tablas y relaciones con herramientas como Sequelize) como para bases de datos NoSQL (donde definen documentos con herramientas como Mongoose). Es un concepto agnóstico al tipo de base de datos.

## Pregunta Una API Rest trabaja principalmente con

**a. Recursos identificados por URLs únicas**  
b. Archivos XML exclusivamente  
c. Variables de sesión para mantener el estado  
d. Bases de datos relacionales obligatoriamente  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
a. Recursos identificados por URLs únicas: El corazón de una API REST es el concepto de recurso (que puede ser un usuario, un producto, una factura, etc.). En la arquitectura REST, cada recurso debe ser accesible a través de una dirección única y uniforme llamada URI/URL (por ejemplo, ``https://api.tusitioweb.com/usuarios/42``). Los verbos HTTP (GET, POST, PUT, DELETE) actúan sobre esa URL única para definir qué acción se quiere realizar con ese recurso.

Por qué las demás opciones son incorrectas:  
b. Archivos XML exclusivamente: Es incorrecto porque, de hecho, hoy en día el estándar de la industria para las APIs REST es JSON debido a que es mucho más liviano y fácil de parsear en JavaScript. Además, REST es agnóstico al formato: podría transferir JSON, XML, HTML o texto plano.  

c. Variables de sesión para mantener el estado: Una de las restricciones fundamentales de REST es que debe ser Stateless (sin estado). Cada petición del cliente al servidor debe contener toda la información necesaria para comprender y procesar la solicitud. El servidor no almacena sesiones del cliente en memoria; en su lugar, se suelen utilizar mecanismos como tokens (JWT) en las cabeceras de cada petición.  

d. Bases de datos relacionales obligatoriamente: A una API REST no le importa en absoluto dónde o cómo guardas la información. Podés usar una base de datos relacional (MySQL, PostgreSQL), una NoSQL (MongoDB), almacenamiento local o incluso un archivo de texto. Lo único que le importa es cómo se exponen esos recursos hacia el exterior a través de la red.  

## Pregunta Los servicios en una API Rest

a. Solo son necesarios en aplicaciones muy grandes  
**b. Manejan la lógica de negocio y actúan como "motores" de la aplicación**  
c. Se encargan únicamente de la conexión con APIs externas  
d. Siempre deben comunicarse directamente con la base de datos  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
b. Manejan la lógica de negocio y actúan como "motores" de la aplicación: Aunque en arquitecturas MVC muy simples o básicas la lógica se suele escribir directo en el controlador, a medida que la aplicación crece se introduce la capa de Servicios (Services). Su función es aislar por completo la "lógica de negocio" (cálculos, reglas del sistema, procesamiento de datos, decisiones algorítmicas) tanto de la petición HTTP (controlador) como de la base de datos (modelo). El controlador solo recibe los datos, se los pasa al servicio para que haga la "magia" o el trabajo pesado, y luego el controlador responde.

Por qué las demás opciones son incorrectas:  
a. Solo son necesarios en aplicaciones muy grandes: Aunque es cierto que se aprecian más en proyectos medianos a grandes para mantener el código limpio, es una excelente práctica usarlos desde el principio en cualquier tamaño de aplicación para mantener una separación de responsabilidades saludable y facilitar las pruebas unitarias.

c. Se encargan únicamente de la conexión con APIs externas: Es una confusión común. Si bien un servicio puede encargarse de consumir una API externa (como la API de un sistema de pagos o del clima), esa no es su única función. Su propósito principal es resolver cualquier lógica de negocio interna de tu propia aplicación.

d. Siempre deben comunicarse directamente con la base de datos: Falso. Para comunicarse con la base de datos, los servicios invocan y utilizan a los Modelos (o repositorios). El servicio no escribe consultas SQL ni interactúa directamente con el motor de la base de datos, sino que le pide al modelo los datos que necesita para poder procesar su lógica.

## Pregunta ¿Cuál de estas NO es una capa típica en una API Rest?

**a. Vistas**  
b. Controladores  
c. Modelos  
d. Servicios  

**Retroalimentación**  
Argumentación de por qué es la correcta (es decir, por qué NO es una capa típica):  
a. Vistas: Las Vistas (la "V" del patrón MVC tradicional) son las responsables de renderizar y mostrar la interfaz gráfica al usuario (el HTML, CSS, etc.). En el desarrollo moderno de una API Rest, el servidor es stateless y se desacopla por completo del frontend. La API Rest no genera interfaces visuales; solo procesa datos y los envía en formatos puros como JSON. La "vista" o el diseño de la pantalla pasa a ser responsabilidad exclusiva de las aplicaciones cliente (un desarrollo en React, Angular, una app móvil, etc.).

Por qué las demás sí son capas típicas en el backend de una API Rest:  
b. Controladores: Como vimos antes, son esenciales porque reciben las peticiones HTTP desde las rutas, extraen los parámetros y coordinan qué se debe hacer y qué responder.

c. Modelos: Son indispensables para definir la estructura de los datos y gestionar la comunicación directa con la base de datos (hacer las consultas, inserciones, etc.).

d. Servicios: Es la capa intermedia estándar para aislar la lógica de negocio, haciendo que el código sea modular, reutilizable y fácil de testear.

## Pregunta ¿Cuál método HTTP se utiliza típicamente para obtener información en una API Rest?

a. POST  
b. PUT  
c. DELETE  
**d. GET**  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
d. GET: El método HTTP GET está diseñado pura y exclusivamente para solicitar y recuperar información de un servidor. Una regla fundamental de GET es que debe ser un método "seguro" e "idempotente", lo que significa que solo lee datos; no debe alterar, modificar ni crear información en el servidor, sin importar cuántas veces se ejecute la misma petición.

Por qué las demás opciones son incorrectas para este propósito:  
a. POST: Se utiliza típicamente para crear un nuevo recurso en el servidor (por ejemplo, registrar un nuevo usuario o agregar un producto al carrito). Envía los datos dentro del cuerpo de la petición (body).

b. PUT: Se usa para actualizar un recurso ya existente en su totalidad. Reemplaza el recurso actual con los nuevos datos enviados por el cliente.

c. DELETE: Como su nombre lo indica, su única función es eliminar un recurso específico del servidor.

## Pregunta El protocolo de comunicación utilizado por una API Rest es

a. FTP  
**b. HTTP**  
c. SMTP  
d. SOAP  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
b. HTTP: REST (Representational State Transfer) no es un protocolo en sí mismo, sino un estilo de arquitectura de software, y se diseñó para funcionar de forma nativa sobre el protocolo HTTP (Hypertext Transfer Protocol). Aprovecha al máximo todos sus elementos existentes: los métodos (GET, POST, etc.), los códigos de estado (200 OK, 404 Not Found), las cabeceras (headers) y las URLs.

Por qué las demás opciones son incorrectas:  
a. FTP (File Transfer Protocol): Es un protocolo diseñado pura y exclusivamente para la transferencia de archivos entre un cliente y un servidor en una red. No maneja el concepto de recursos web ni métodos para interactuar con lógica de aplicaciones.

c. SMTP (Simple Mail Transfer Protocol): Es el protocolo estándar de la red que se utiliza para el intercambio y envío de correos electrónicos.

d. SOAP (Simple Object Access Protocol): No es un protocolo de transporte de red, sino un protocolo de mensajería basado en XML que compite directamente con el estilo REST. Mientras que REST es un estilo arquitectónico flexible sobre HTTP, SOAP es un protocolo estricto con sus propias reglas complejas de contratos y seguridad (WSDL).

## Pregunta ¿Dónde se implementaría la lógica para filtrar productos que están en stock en una API Rest bien estructurada?

a. En las rutas  
b. En los modelos  
c. En el archivo principal index.js  
**d. En los servicios**  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
d. En los servicios: Como vimos un par de preguntas atrás, la capa de Servicios es la encargada de la lógica de negocio. Filtrar productos para mostrar solo los que tienen stock disponible es una regla de negocio clara. El controlador simplemente recibe la petición del cliente (por ejemplo, GET /productos?enStock=true), extrae ese parámetro y le dice al servicio: "Che, dame los productos filtrados". El servicio se encarga de procesar esa regla (interactuando con el modelo para traer la información y aplicando el filtro correspondiente si no se hizo directo en la base de datos). De esta forma, si el día de mañana cambia la regla de qué significa "estar en stock" (por ejemplo, si se requiere que tengan un mínimo de 3 unidades), solo modificás el servicio y no tocás el resto de la aplicación.

Por qué las demás opciones son incorrectas:  
a. En las rutas: Las rutas solo se encargan de redirigir el tráfico. Si pones lógica de filtrado ahí, estarías sobrecargando la puerta de entrada de la API y rompiendo la modularidad.

b. En los modelos: El modelo solo debe encargarse de saber cómo hablar con la base de datos para traer, guardar o actualizar la información cruda. No debería tomar decisiones sobre qué datos mostrar según el contexto de la petición del usuario.

c. En el archivo principal index.js: El archivo index.js (o app.js) es el punto de arranque de la aplicación. Su única función es levantar el servidor, configurar los middlewares globales (como CORS o express.json()) y conectar las rutas principales. Poner lógica de negocio ahí transformaría el proyecto en un código "espagueti" imposible de mantener.

## Pregunta Las capas de una aplicación API Rest dividen las responsabilidades para que cada parte se encargue de algo específico

a. Falso  
**b. Verdadero**  

**Retroalimentación**  
Argumentación de por qué es la correcta:  
b. Verdadero: El principio fundamental detrás de una arquitectura de capas (como la que estuvimos repasando: Rutas -> Controladores -> Servicios -> Modelos) es la Separación de Responsabilidades (Separation of Concerns). Dividir la aplicación en bloques específicos garantiza que si necesitás cambiar la base de datos (capa de Modelos) o cambiar una regla de negocio (capa de Servicios), no tengas que reescribir cómo se reciben las peticiones en la web (capa de Controladores/Rutas). Esto hace que el código sea modular, escalable, infinitamente más fácil de mantener y, sobre todo, limpio.

Por qué la opción "Falso" es incorrecta:  
Decir que es falso implicaría que una API REST debería programarse en un solo archivo gigante donde todo está mezclado (las rutas, las consultas a la base de datos, la lógica de negocio y las respuestas). Aunque técnicamente una aplicación así podría "funcionar", sería un caos absoluto de mantener, propenso a errores y un dolor de cabeza para cualquier desarrollador que intente leer el código.

Espero les haya sido útil equipo! de Node JS, éste cuestionario lo hice un poco más largo, incluí lo que me parece importante tener en cuenta según la preguntaa, nos vemos, Mirty  
