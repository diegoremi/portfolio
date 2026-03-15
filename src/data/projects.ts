export interface ProjectItem {
  id: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'clave',
    techs: ['Next.js', 'Prisma', 'NextAuth', 'Resend'],
    featured: true,
    image: '/clavedetuser.png',
  },
  {
    id: 'cgestiona',
    techs: ['React', 'Vite', 'Markdown', 'Decap CMS', 'Netlify'],
    featured: true,
    image: '/cgestiona.png',
  },
  {
    id: 'aiMath',
    techs: ['Angular', 'Anthropic API', 'OpenAI API'],
    githubUrl: 'https://github.com/diegoremi/tesis_ai_math_app',
  },
];
