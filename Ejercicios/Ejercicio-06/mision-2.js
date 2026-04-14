// API Utilizada https://rickandmortyapi.com/api/character/


const url = "https://rickandmortyapi.com/api/character";

async function obtenerPersonajesAsync() {
  try{
    // 1. Pedimos los datos (Esperamos el fetch)
    const response = await fetch(url);

    // 2. Verificamos el .ok (Igual que antes)
     // Usamos .ok para saber si el status es 200-299
    if (!response.ok) {
      //lanzamos el error, debe empezar con mayúscula: new Error. Si lo ponés en minúscula, el navegador no va a entender qué querés crear.
      throw new Error("El servidor falló")
    }
      // 3. Convertimos a JSON (¡Ojo! Esto también lleva await)
    const data = await response.json();

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
  }  
  catch(error) {
      // Aquí es donde "armas" el manejo del error
      console.error("¡Algo salió mal!");
      console.error("Mensaje de error:", error.message);
  }
  finally {
    // Se escribe como una función flecha vacía
    console.log("La petición a la API de Rick and Morty ha finalizado.");
  }
};

// ¡No te olvides de llamar a la función al final!
obtenerPersonajesAsync();

// // La función asíncrona Estructura
// async function obtenerDatos() {
//   try {
//     // Pausa aquí hasta que el servidor responda
//     const response = await fetch(url);
    
//     // Pausa aquí hasta que el JSON esté listo
//     const data = await response.json();

//     // Aquí va tu lógica  - No necesita pausas
    
//   } catch (error) {
//     // Bloque de error (NO usa flecha)
//   } finally {
//     // Bloque final (NO usa flecha)
//   }
// }

// // Ejecución
// obtenerDatos();