export interface ExperienceEntry {
  title: string
  company: string
  date: string
  description: string
}

export const experienceList: ExperienceEntry[] = [
  {
    title: 'Software Engineer',
    company: 'Even',
    date: '2024 Octubre - Presente',
    description:
      'Trabajamos con un enfoque AI-first: Claude Code y otros agentes, potenciados con Skills, Plugins y MCPs, son parte central de nuestro día a día. Así, un equipo de 20 - 30 personas construye software para que los artistas conecten directamente con sus fans y comunidades. Stack: React/React Native, Next.js, TypeScript, TailwindCSS y Docker.',
  },
  {
    title: 'Software Engineer',
    company: 'Global66',
    date: '2019 - 2024 Agosto',
    description:
      'Comenzamos con 20 personas y llegamos a ser +280. He participado en diferentes equipos desarrollando las plataformas B2C y B2B utilizando tecnologías como Vue 3, Pinia, TypeScript y TailwindCSS. A la vez, la aplicación móvil en NativeScript para (Android/iOS).',
  },
  {
    title: 'Full Stack Developer',
    company: 'Softdynamic',
    date: '2018 - 2019 Octubre',
    description:
      'Desarrollé una aplicación de escritorio con Electron JS y una plataforma web de gestión de archivos en Vue.js, similar a Google Drive. Implementé servicios en una API PHP, migré servicios desde PHP Manila y desarrollé módulos de mantenimiento en Laravel para un e-commerce.',
  },
]
