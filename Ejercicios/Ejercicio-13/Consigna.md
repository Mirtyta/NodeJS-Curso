# Ejercicio Práctico

## Clase N° 13: Modelo de datos y trabajo con JSON

### Organización de la Capa de Modelos en tu API

Sabrina y Matías regresan para revisar tu progreso. Esta vez, Sabrina es quien toma la palabra con entusiasmo:

"¡Tu organización ha mejorado muchísimo! Ya tienes rutas bien definidas, controladores claros y una capa de servicios eficiente. Ahora es momento de llevar la estructura un paso más allá."

Matías asiente y añade con una mirada seria:

"Hasta ahora, has estado manejando datos simulados directamente en la capa de servicios, pero en un proyecto real, los datos suelen almacenarse en bases de datos o archivos estructurados. Por eso, vamos a introducir la capa de modelos, que centralizará la gestión de datos."

### Misión

Matías concluye con una mirada confiada: "Si logras completar este desafío, habrás dado un paso gigante hacia el desarrollo backend profesional. ¡Es hora de escribir código limpio y estructurado!"

1- **Crear la capa de modelos**

  Organiza los datos de tu aplicación en archivos JSON dentro de una carpeta llamada data.

  Migra los datos simulados que estaban en los servicios hacia estos archivos.

  Asegúrate de que la estructura de los archivos JSON sea clara y representativa de la información que manejas.

  Crea archivos para los modelos de tu aplicación y crea los métodos necesarios para interactuar con los JSON de datos.

2- **Modificar los servicios para interactuar con los modelos**

  Ajusta la capa de servicios para que en lugar de devolver datos directamente desde el código lo haga utilizando los métodos creados en los modelos.

  Asegúrate que los controladores sigan obteniendo los datos correctamente desde los servicios.
