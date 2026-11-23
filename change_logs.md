# Change Logs

Registro de cambios del portfolio. Cada commit añade una entrada nueva al principio con su versión.

Formato: `## [versión] - AAAA-MM-DD` seguido de los apartados **Añadido**, **Cambiado**, **Corregido** o **Eliminado** que apliquen.

---

## [0.4.2] - 2026-11-23

### Eliminado
- Ubicación ("Jaén · ES") de la sección de contacto y sus estilos (`.contact__location`).

---

## [0.4.1] - 2026-11-23

### Cambiado
- "Quién soy": "aunque casi todo el mundo me conoce como Bulli" → "conocido en la comunidad como Bulli".

---

## [0.4.0] - 2026-11-23

### Añadido
- Apartado **Habilidades** en "Quién soy" con C++, Java, Python, SQL, Desarrollo Web (HTML, CSS, JS) y React, mostradas como etiquetas con hover.
- Lista `skills` en `src/data.ts` para editar las habilidades.

### Eliminado
- Segundo párrafo de "Quién soy" ("Disfruto convirtiendo ideas en aplicaciones reales…").

---

## [0.3.1] - 2026-11-23

### Eliminado
- Enlace "Contacto" del menú de navegación (junto a "Proyectos"). Se mantiene el botón "Contacto" de la esquina superior derecha.

### Cambiado
- En móvil el botón "Contacto" de la esquina superior derecha sigue visible junto al botón del menú (antes se ocultaba), para que la sección de contacto siga siendo accesible.

---

## [0.3.0] - 2026-11-23

Arreglos solicitados en `IDEAS/arreglos.txt`.

### Cambiado
- Botón del menú superior: "Hablemos" → "Contacto".
- Terminal del Hero: `cat idiomas.toml` → `cat expediente.toml`.
- `olivia-agro.com` en la terminal ahora lleva a la web del proyecto, sin aspecto de enlace (mismo color, sin subrayado ni cursor de mano).
- Proyectos ("En qué trabajo"): "Olivia Agro" → "Olivia".
- Botón de correo: muestra "Gmail" y abre Gmail en una pestaña nueva con un correo listo para josepudibulli@gmail.com.

### Eliminado
- Barra de desplazamiento lateral del navegador (el scroll sigue funcionando con ratón, teclado y táctil).
- Botón "Contactar" del Hero (ya está el botón "Contacto" del menú superior).
- Texto "— Estudiante de Ingeniería Informática" encima de "Del diseño al código".

---

## [0.2.0] - 2026-11-23

Cambios solicitados en `IDEAS/Cambios.pdf`.

### Añadido
- Datos de contacto: botón de email (`mailto:josepudibulli@gmail.com`) que abre directamente un correo nuevo.
- Enlace a GitHub (`github.com/josebullii`) en la sección de contacto.
- Animación de scroll al cambiar de sección: `useSmoothAnchors` y `scrollToSection` en `src/hooks.ts` animan el desplazamiento (easing suave, teniendo en cuenta la altura del menú) al pulsar cualquier enlace interno.

### Cambiado
- Slogan del Hero: "Aprendo construyendo" → "Del diseño al código".
- Resumen del perfil: "Estudiante de Ingeniería Informática. Especializado en el desarrollo y gestión de software."
- Texto de contacto: eliminado "o simplemente quieres saludar".
- Menú superior: la marca muestra solo "Bulli".
- `global.css`: el scroll suave pasa de CSS (`scroll-behavior`) a JavaScript.

### Eliminado
- Logo/foto de perfil y la palabra "PORTFOLIO" del menú superior.
- Barra superior del Hero (`BULLI / PORTFOLIO / 2026 / JAÉN · ES` · `EN DESARROLLO`).
- Fila de datos destacados (C1 Inglés · B1 Francés · 01 Proyecto en curso · UJA Jaén).
- Línea "UNIVERSIDAD DE JAÉN · INGLÉS C1 · FRANCÉS B1" del Hero.
- Estilos CSS que ya no se usan (`.metabar`, `.stats`, `.hero__meta`, `.brand__logo`, `.brand__text`).

---

## [0.1.0] - 2026-11-23

### Añadido
- Primera versión de la web en una sola página con scroll: **Inicio**, **Sobre mí**, **Proyectos** y **Contacto**.
- Menú superior fijo que desplaza suavemente a cada sección y marca la sección activa; menú desplegable en móvil.
- Componentes `Navbar`, `Hero`, `About`, `Projects`, `Contact` y `Footer` en `src/components/`.
- `src/data.ts` con todo el contenido editable (perfil, idiomas, formación, proyectos y contacto).
- `src/hooks.ts` con `useReveal` (animaciones al hacer scroll) y `useActiveSection`.
- Tarjeta tipo terminal en el Hero con los niveles de idiomas y fila de datos destacados.
- Tipografías Inter, Space Grotesk y JetBrains Mono (Google Fonts).

### Cambiado
- `global.css`: paleta oscura (`#101827`, `#1E293B`, `#F8FAFC`, `#3B82F6`, `#22C55E`), tarjetas con hover, bordes finos y diseño responsive.
- `index.html`: título, meta descripción y `theme-color`.

---

## [0.0.1] - 2026-11-23

### Añadido
- Proyecto inicial creado con Vite usando la plantilla React + TypeScript.
- Página `index` en blanco (`App.tsx` renderiza un `<main>` vacío).
- Estructura de carpetas base: `src/components/`, `src/styles/`, `src/assets/`, `public/images/`.
- `src/styles/global.css` con un reset mínimo.
- Dependencia `lucide-react` para iconos.
- `README.md` con descripción, stack, scripts y estructura del proyecto.
- `change_logs.md` para registrar las versiones.

### Cambiado
- `index.html`: idioma `es`, título "Portfolio" y meta descripción.
- `.gitignore`: se excluyen la guía PDF local y los archivos `.env`.

### Eliminado
- Contenido de demostración de la plantilla de Vite (`App.css`, `index.css`, imágenes y `icons.svg`).
