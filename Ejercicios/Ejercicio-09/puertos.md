# Resumen Técnico: Manejo de Puertos y Errores Comunes en Node.js + Express

Cuando desarrollamos servidores locales con Node.js y Express, es muy común encontrarse con conflictos de configuración en el `package.json` o con puertos que se quedan "trabados" en segundo plano. A continuación, se detallan las soluciones a los problemas más frecuentes.

---

## 1. El error del "Bloc de notas" al ejecutar `npm run start`

Si al tirar el comando de arranque se abre el archivo `index.js` en el Bloc de notas de Windows en lugar de ejecutarse en la terminal, se debe a un error de configuración en los scripts del `package.json`.

* **Causa:** El script `"start"` está configurado únicamente como `"index.js"`. Windows, al no recibir instrucciones claras, abre el archivo con su programa por defecto.
* **Solución:** Modificar el `package.json` para indicarle explícitamente a la terminal que debe ejecutar el archivo utilizando el entorno de Node.js, y asegurar que el tipo de módulo sea el correcto para soportar `import`:

```json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
```

## 2. El misterio del error Cannot GET /ruta

Si el servidor levanta sin errores pero el navegador muestra la leyenda Cannot GET /ping, significa que Express está activo pero no tiene registrada esa ruta específica en el código que se está ejecutando actualmente.

Causas comunes:
Archivo sin guardar: Se modificó el código en el editor (por ejemplo, agregando app.get('/ping', ...)), pero no se guardó el archivo (Ctrl + S) antes de iniciar el servidor.

Falta de reinicio: Node.js no detecta cambios en vivo por defecto. Si modificás el código, tenés que apagar el servidor en la terminal (Ctrl + C) y volver a levantarlo (npm run start).

Confusión de carpetas: Estar editando el index.js de un proyecto (ej. Misión 1) pero tener la terminal ejecutando la carpeta de otro proyecto diferente (ej. Misión 2).

Puerto enganchado (El proceso fantasma): Se cerró la terminal a la fuerza o de forma limpia, pero el proceso de Node no se destruyó completamente en el sistema operativo y se quedó "adueñado" del puerto de manera invisible. Al levantar un código nuevo, se sigue ejecutando la versión vieja que quedó flotando en la memoria caché del puerto.

## 3. ¿Cómo elegir qué puerto usar en desarrollo?

Un puerto es como el número de departamento dentro de un edificio (donde el edificio es tu dirección local localhost o 127.0.0.1). Tu computadora tiene 65.535 puertos, pero dos programas no pueden usar el mismo puerto en simultáneo.

Rango seguro: Para practicar o desarrollar, se recomienda usar puertos entre el 3000 y el 9000. Los puertos inferiores (0 al 1023) están reservados para el sistema operativo y servicios web esenciales (como el puerto 80 para HTTP o 443 para HTTPS).

Puertos estándar de la comunidad:

3000: El rey por defecto para servidores Node.js/Express y aplicaciones React.

4000 / 5000: Los clásicos "planes B" cuando el 3000 está ocupado.

5173: El puerto nativo que utiliza Vite para el Frontend.

Buena práctica para producción: No dejes el puerto fijo. Usá una variable de entorno para que el servidor sea flexible al subirlo a la nube: const PORT = process.env.PORT || 3000;

## 4. El "Santo Remedio" de PowerShell para liberar puertos

Cuando un puerto (por ejemplo, el 3000) se queda enganchado con un proceso fantasma y no te deja levantar tu servidor correctamente, podés matarlo a la fuerza abriendo una terminal de PowerShell y ejecutando la siguiente línea:

PowerShell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
¿Cómo funciona por dentro?
Get-NetTCPConnection -LocalPort 3000: Escanea las conexiones de red locales de la computadora y localiza el puerto 3000.

.OwningProcess: Extrae únicamente el PID (el número de documento de identidad único del programa que lo está reteniendo).

Stop-Process -Id (...) -Force: Ejecuta un "Finalizar Tarea" instantáneo y fulminante sobre ese ID, liberando el puerto por completo en un segundo.

💡 Tip: Si el puerto trabado es otro (por ejemplo, el 4000), simplemente cambiás el número al final de LocalPort por el que corresponda: ... -LocalPort 4000 ...

Espero ésto les sirva de ayuda para alguno de éstos errores..
