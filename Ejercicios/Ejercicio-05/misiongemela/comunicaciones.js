/* 🛠️ Misión Gemela: "El Centro de Comando Galáctico"
Contexto:
Sos la jefa de comunicaciones de una estación espacial. 
Tenés que configurar una terminal que reciba órdenes de los astronautas.

Misión 1: El Despegue (Configuración)
En una carpeta nueva, ejecutá npm init -y.

Abrí el package.json y buscá la parte de "scripts".

Agregá uno que se llame "lanzar" que ejecute tu archivo comunicaciones.js. 
(Para probarlo usarías npm run lanzar).

Misión 2: El Procesador de Órdenes
Crea el archivo comunicaciones.js. Usando process.argv, hacé que el programa reaccione así:

Si el astronauta escribe ESTADO, imprimí: "Sistemas funcionando al 100%".
Si escribe ENVIAR {mensaje}, imprimí: "Mensaje: '{mensaje}' enviado a la Tierra".
Si escribe REPARAR {sector}, imprimí: "Enviando robots al sector {sector}...".
Si escribe ABORTAR {codigo}, imprimí: "¡ALERTA! Misión abortada con código: {codigo}". */



// Capturamos las palabras
const comando = process.argv[2]; // La acción (EJ: ENVIAR o ESTADO)
const detalle = process.argv[3]; // El complemento (EJ: "un saludo" o "Sector 5")
const sector = process.argv[3]; // el sector que debemos arreglar
const codigo = process.argv[3]; // codigo de abortar

switch (comando) {
    case "ESTADO":
        console.log("🚀 Sistemas funcionando al 100%");
        break;

    case "ENVIAR":
        console.log(`📡 Mensaje: '${detalle}' enviado a la Tierra`);
        break;

    case "REPARAR":
        console.log(`🤖 Enviando robots al sector '${sector}'...`);
        break;

    case "ABORTAR":
        console.log(`⚠️ ¡ALERTA! Misión abortada con código: ${codigo}`);
        break;

    default:
        console.log(`❌ Comando no reconocido por la base.`);
        break;
}