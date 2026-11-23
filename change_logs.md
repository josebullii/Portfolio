# Change Logs

Registro de cambios del portfolio. Cada commit añade una entrada nueva al principio con su versión.

Formato: `## [versión] - AAAA-MM-DD` seguido de los apartados **Añadido**, **Cambiado**, **Corregido** o **Eliminado** que apliquen.

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
