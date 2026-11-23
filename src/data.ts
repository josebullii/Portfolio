// Contenido del portfolio. Edita aquí los textos sin tocar los componentes.

export const profile = {
  name: 'Jose Pulido Díaz',
  alias: 'Bulli',
  role: 'Estudiante de Ingeniería Informática',
  university: 'Universidad de Jaén',
  summary:
    'Estudiante de Ingeniería Informática. Especializado en el desarrollo y gestión de software.',
}

export const currentYear = new Date().getFullYear()

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
] as const

export const skills = [
  'C++',
  'Java',
  'Python',
  'SQL',
  'Desarrollo Web (HTML, CSS, JS)',
  'React',
]

export const languages = [
  { name: 'español', level: 'Nativo', value: 100 },
  { name: 'inglés', level: 'C1', value: 85 },
  { name: 'francés', level: 'B1', value: 55 },
]

export const education = [
  {
    title: 'Grado en Ingeniería Informática',
    place: 'Universidad de Jaén',
    detail: 'En curso',
  },
  {
    title: 'Inglés — Nivel C1',
    place: 'Escuela Oficial de Idiomas (EOI)',
    detail: 'Certificado',
  },
  {
    title: 'Francés — Nivel B1',
    place: 'Escuela Oficial de Idiomas (EOI)',
    detail: 'Certificado',
  },
]

export const projects = [
  {
    name: 'Olivia',
    url: 'https://olivia-agro.com',
    status: 'En desarrollo',
    description:
      'Aplicación web en la que estoy trabajando actualmente. Puedes ver su evolución en olivia-agro.com.',
    tags: ['Web app'],
  },
]

export const contact = {
  email: 'josepudibulli@gmail.com',
  github: 'https://github.com/josebullii/',
  linkedin: '',
}
