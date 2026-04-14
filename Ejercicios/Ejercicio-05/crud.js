// Capturamos las palabras
const comando = process.argv[2]; // La acción (EJ: GET o DELETE)
const data = process.argv[3]; // Mensaje POST
const id = process.argv[3]; // ID para PUT y DELETE

switch (comando) {
    case "GET":
        console.log("🆗 Toma un dato");
        break;

    case "POST":
        console.log(`✅ Recibimos: el dato '${data}' satisfactoriamente`);
        break;

    case "PUT":
        console.log(`🔄 Modificamos el item con id:  '${id}' satisfactoriamente`);
        break;

    case "DELETE":
        console.log(`❌ El item con el id: ${id} se eliminó con éxito`);
        break;

    default:
        console.log(`❌ Comando no reconocido por la base.`);
        break;
}