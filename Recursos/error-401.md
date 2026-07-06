# 🛠️ Solución: Error de Bloqueo (401 Unauthorized) en Vercel con Postman / REST Client

Si al intentar probar tus rutas de Node (`POST`, `PUT`, `DELETE`) desde **Postman** o **REST Client** usando el link de Vercel te rebota la petición con un error **401 (Unauthorized)**, o te aparece un mensaje pidiendo credenciales que no son las de tu app, el problema es la **Protección de Despliegue de Vercel**.

Por defecto, Vercel bloquea las peticiones externas a las URLs de prueba para proteger el proyecto. Aquí tienes cómo solucionarlo de dos formas distintas.

---

## OAF Opción 1: Desactivar la protección (La solución más rápida)

Si estás en etapa de desarrollo y pruebas con tu equipo, puedes desactivar esta capa de seguridad temporalmente para que Postman pueda entrar sin trabas:

1. Entra al **Dashboard de Vercel** y selecciona tu proyecto de Backend.
2. Ve a la pestaña **Settings** (Configuración) en el menú superior.
3. En la barra lateral izquierda, haz clic en **Deployment Protection**.
4. En la sección de **Vercel Authentication**, cambia la configuración a **Disabled** (Desactivado).
5. Guarda los cambios.

> 🚀 **¡Listo!** A partir de ahora, Vercel no se meterá en el medio y podrás testear tus rutas enviando tus tokens de Firebase normalmente.

---

## Opciones Opción 2: Usar un Bypass Token (Si prefieres mantener la seguridad activa)

Si no quieres desactivar la protección por completo, puedes generar una "llave maestra" para que Vercel reconozca a tu Postman/REST Client:

1. Ve a **Settings** > **Deployment Protection** en tu panel de Vercel.
2. Busca la sección **Protection Bypass for Automation**.
3. Activa la opción y copia el **código secreto (Token)** que te genera Vercel.

### ¿Cómo usarlo en Postman o REST Client?

Deberás agregar una cabecera (**Header**) extra en cada petición que hagas:

* **Key / Nombre del Header:** `x-vercel-protection-bypass`
* **Value / Valor:** `EL_CODIGO_SECRETO_QUE_COPIASTE`

Con esa cabecera puesta, Vercel verificará el código, verá que eres tú y dejará pasar la petición directo a tu código de Node.
