# 📟 Clase 08

## Servidores y Arquitectura

¿Qué es realmente un Servidor?
No es solo una caja con luces. Es el corazón que late detrás de cada "clic" que das en internet.

## 🏗️ Servidor de Hardware

Es la máquina física. Una computadora súper potente, sin monitor, que vive en un centro de datos (Data Center) con aire acondicionado a full para no derretirse.

✓ CPU Multinúcleo
✓ Mucha RAM
✓ Discos en RAID (Seguridad)

## 💿 Servidor de Software

Es el programa (como Apache, Nginx o nuestro futuro Node.js) que corre dentro del hardware. Su trabajo es escuchar pedidos y mandar archivos.

✓ Escucha Puertos (80, 443)
✓ Procesa Lógica
✓ Entrega HTML/JSON

## El Barrio Digital: Tipos de Alojamiento

### 🏢 Compartido

Varios sitios en un mismo servidor físico. Barato, pero si un sitio consume mucho, todos sufren.

### 🏠 VPS (Virtual Private Server)

Servidor físico dividido virtualmente. Tienes recursos garantizados (RAM, CPU) solo para ti.

### 🏰 Dedicado

Toda la máquina física es para un solo cliente. Máxima potencia y control total.

### ☁️ Cloud Hosting

Red de servidores trabajando juntos. Es elástico: si necesitas más potencia, se escala al instante. Pagas lo que usas.

### 🛠️ Hostings Especializados

Configurados para tecnologías específicas: WordPress, Node.js, Python. Optimizan el software para que esa herramienta vuele.

## Patrones de Arquitectura de Software

### Escalabilidad

### Servicios y Microservicios

En lugar de un Monolito (una app gigante), dividimos la lógica en piezas pequeñas e independientes que hablan entre sí (vía HTTP o colas de mensajes). Ideal para equipos grandes y despliegues rápidos.

## Reactividad

### Arquitectura de Eventos

El sistema reacciona a cambios de estado (clics, pagos confirmados, sensores). Un emisor lanza un "evento" y múltiples receptores actúan en consecuencia sin estar rígidamente acoplados.

## Mantenibilidad

### Arquitectura Hexagonal (Ports & Adapters)

Su objetivo es aislar la Lógica de Negocio (el centro del hexágono) de factores externos como la Base de Datos, el Navegador o APIs de terceros. Usamos "Puertos" para definir qué queremos hacer y "Adaptadores" para conectar la tecnología real. ¡Puedes cambiar la base de datos sin tocar la lógica!

## El Corazón del Curso: MVC vs API REST

### Renderizado en Servidor

MVC (Modelo-Vista-Controlador)
"El servidor te da la página cocinada"

Es un patrón donde el servidor procesa los datos y los mezcla con una plantilla (Template) para generar el HTML final. El cliente recibe el documento listo para mostrar. Muy usado en blogs o sitios tradicionales.

• Mayor SEO (el contenido está en el HTML)
• Acoplamiento fuerte entre vista y lógica
• Carga más pesada para el servidor

### Arquitectura Desacoplada

API REST (Representational State Transfer)
"El servidor te da la esencia: los datos puro JSON"

Aquí es donde brilla Node.js. El servidor es **Stateless** (no guarda estado de sesión entre pedidos) y solo entrega recursos. El Frontend (React, Angular o Mobile) es el encargado de recibir esos datos y decidir cómo "dibujarlos" en pantalla.

Ejemplo de Respuesta (JSON)

```Json
{
  "usuario": "Mirty",
  "curso": "Node.js Back-end",
  "progreso": 85,
  "lecciones": ["Servidores", "Arquitectura", "Express"]
}
```

• Multiplataforma: Un mismo servidor sirve a la Web y al Celular.  
• Escalabilidad: Menor carga para el servidor (solo manda texto).  
• Verbos HTTP: Usa GET, POST, PUT, DELETE de forma estandarizada.  

🚀 ¿Por qué API REST para nuestro curso?

Porque es la forma en la que se construye el software hoy. Nos permite separar el trabajo del equipo de Front del equipo de Back, facilita el testing y permite que nuestra aplicación crezca sin límites. ¡Prepárate porque vamos a modelar datos como profesionales!
