// API Utilizada https://rickandmortyapi.com/api/character/


const url = "https://rickandmortyapi.com/api/character";

fetch(url) // Por defecto es un GET, no necesita 'config'
  .then(response => {
    // Usamos .ok para saber si el status es 200-299
    if (!response.ok) {
      //lanzamos el error, debe empezar con mayúscula: new Error. Si lo ponés en minúscula, el navegador no va a entender qué querés crear.
      throw new Error("El servidor falló")
    }
      // 1. Verificamos que la respuesta sea exitosa (Status 200)
      return response.json(); 
  })
  .then(data => {
    // Misión 1: Procesar los datos recibidos
    // Tip: Recuerden que los personajes están en data.results
    // Le asignamos un nombre más claro
    const personajes = data.results
    // tomamos los 5 primeros datos
    const cincoprimeros = personajes.slice(0,5);
    //mostramos los 5 personajes completos
    console.log(" *+++++++++++++++++++++++++++++++++++++++++*");
    console.log("  ------------- Info Completa -------------");
    console.log(" *+++++++++++++++++++++++++++++++++++++++++*");
    console.log(cincoprimeros);

    // Misión 1 (Plus): Resumen limpio para la consola
    // hacemos un resumen para mostrar solo id, nombre y especie
      const resumen = cincoprimeros.map(p => ({ // Después transformo, muestro solo id, nombre y especie
        id: p.id,
        nombre: p.name,
        especie: p.species
    }));

      // Ahora trabajamos con nuestra nueva variable, tomamos el map de los 5 primeros
      console.log(" *+++++++++++++++++++++++++++++++++++++++++*");
      console.log(" ------------- Resumen Visual -------------");
      console.log(" *+++++++++++++++++++++++++++++++++++++++++*");
      console.table(resumen);

  })
  .catch(error => {
      // Aquí es donde "armas" el manejo del error
      console.error("¡Algo salió mal!");
      console.error("Mensaje de error:", error.message);
  })
  .finally(() => {
    // Se escribe como una función flecha vacía
    console.log("La petición a la API de Rick and Morty ha finalizado.");
  });

  
// Estructura del Asinc 
// // La cadena de promesas
// fetch(url)
//   .then((response) => {
//  // Estación de transformación
    // Aquí podemos hacer if(!response.ok)
    // Usamos !response.ok para detectar estados de error que fetch ignora.
    // Interrupción temprana: Al usar throw new Error(), forzamos que el código salte inmediatamente al catch.

//     return response.json();
//   })
//   .then((data) => {
//     // Estación de trabajo (Aquí va tu slice y map)
//   })
//   .catch((error) => {
//     // Red de seguridad (usa flecha)
//   })
//   .finally(() => {
//     // Cierre (usa flecha)
//   });

