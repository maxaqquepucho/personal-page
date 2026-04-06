export interface ExperienceEntry {
  title: string
  company: string
  date: string
  description: string
}

export const experienceList: ExperienceEntry[] = [
  {
    title: 'Software Developer',
    company: 'Even',
    date: '2024 Octubre - Presente',
    description:
      'Somos un grupo de 20 - 30 personas que trabajamos desarrollando software para que los artistas puedan conectar con sus fans y comunidades de manera directa. Usamos tecnologías como React/React Native, Next.js, TypeScript, TailwindCSS, Docker, entre otras.',
  },
  {
    title: 'Software Developer',
    company: 'Global66',
    date: '2019 - 2024 Agosto',
    description:
      'Comenzamos con 20 personas y llegamos a ser +280. He participado en diferentes equipos desarrollando las plataformas B2C y B2B utilizando tecnologías como Vue 3, Pinia, TypeScript y TailwindCSS. A la vez, la aplicación móvil en NativeScript para (Android/iOS).',
  },
  {
    title: 'Full Stack Developer',
    company: 'Softdynamic',
    date: '2018 - 2019 Octubre ',
    description:
      'Desarrollé una aplicación de escritorio con Electron JS y una plataforma web de gestión de archivos en Vue.js, similar a Google Drive. Implementé servicios en una API PHP, migré servicios desde PHP Manila y desarrollé módulos de mantenimiento en Laravel para un e-commerce.',
  },
]
