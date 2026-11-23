# Portfolio

Portfolio profesional personal construido con **React + TypeScript + Vite**, pensado para presentar mi perfil, mis proyectos y mis competencias técnicas. Se publicará en **Cloudflare Pages** a partir de este repositorio de GitHub.

> Estado actual: **v0.0.1** — base del proyecto con una página en blanco. Ver [change_logs.md](./change_logs.md).

## Stack

| Herramienta | Uso |
| --- | --- |
| React | Interfaz mediante componentes reutilizables |
| TypeScript | Tipado y detección temprana de errores |
| Vite | Entorno de desarrollo y build de producción |
| CSS3 | Diseño, responsive y animaciones |
| Lucide React | Iconos |
| Cloudflare Pages | Alojamiento y despliegue |

## Requisitos

- Node.js (versión LTS compatible con Vite)
- npm
- Git

## Puesta en marcha

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # compilación de producción en dist/
npm run preview   # previsualizar la build
npm run lint      # linter (oxlint)
```

## Estructura

```
portfolio/
├── public/
│   ├── images/          # imágenes servidas tal cual
│   └── favicon.svg
├── src/
│   ├── components/      # Navbar, Hero, About, Projects, Skills, Contact, Footer (próximamente)
│   ├── assets/          # recursos importados desde el código
│   ├── styles/
│   │   └── global.css   # variables, estilos globales y responsive
│   ├── App.tsx          # compone las secciones
│   └── main.tsx         # punto de entrada
├── index.html
├── package.json
└── tsconfig.json
```

## Secciones previstas

1. **Inicio (Hero)** — nombre, rol y llamadas a la acción.
2. **Sobre mí** — biografía, formación e intereses.
3. **Proyectos** — tarjetas con problema, solución, stack y enlaces.
4. **Tecnologías** — competencias agrupadas por categoría.
5. **Contacto** — correo, LinkedIn, GitHub y CV.

## Despliegue (Cloudflare Pages)

- Comando de build: `npm run build`
- Directorio de salida: `dist`

## Versionado

Cada commit actualiza la versión en `package.json` y añade una entrada en [change_logs.md](./change_logs.md).
