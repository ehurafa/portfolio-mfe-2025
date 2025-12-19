export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  screenshot: string
  githubUrl?: string
  projectUrl?: string // Optional custom URL (e.g., for different ports or external deploys)
  category: 'UI' | 'Data' | 'Games' | 'Tools' | 'API' | 'Other'
}

/**
 * Helper to get project URL from environment variables or fallback to a local port.
 * This makes it easy to add more external Angular/Vue projects.
 */
const getExternalUrl = (envVar: string, defaultPort: string) => {
  const envUrl = import.meta.env[envVar]
  return envUrl || `http://localhost:${defaultPort}`
}

const citacoesUrl = getExternalUrl('VITE_CITACOES_URL', '8080')
const angularTodoUrl = getExternalUrl('VITE_ANGULAR_TODO_URL', '4200')

// Registry of all projects - you'll add your real projects here
export const projects: Project[] = [
  {
    id: 'citacoes',
    name: 'Citações',
    description: 'Gerador de citações inspiradoras com Vue 2',
    technologies: ['Vue 2', 'CSS3'],
    screenshot: '/screenshots/citacoes.png', // Placeholder, using default fallback
    // githubUrl: '', // Add if available
    projectUrl: citacoesUrl, // Custom URL for external Vue project
    category: 'Other'
  },
  {
    id: 'angular-todo',
    name: 'Angular To-Do',
    description: 'Aplicação To-Do lista desenvolvida com Angular 15',
    technologies: ['Angular 15', 'SCSS', 'TypeScript'],
    screenshot: '/screenshots/angular-todo-ai.png',
    projectUrl: angularTodoUrl,
    category: 'Tools'
  },
  {
    id: 'todo-app',
    name: 'To-Do App',
    description: 'Aplicação de lista de tarefas com localStorage para persistência de dados',
    technologies: ['React', 'CSS3', 'LocalStorage'],
    screenshot: '/screenshots/todo-app.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description: 'Aplicação de previsão do tempo consumindo API externa',
    technologies: ['React', 'API', 'CSS3'],
    screenshot: '/screenshots/weather-app.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'API'
  },

  {
    id: 'timer',
    name: 'Timer',
    description: 'Timer funcional com operações matemáticas básicas',
    technologies: ['React', 'JavaScript', 'CSS3'],
    screenshot: '/screenshots/timer.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  },
  // TODO: Add your remaining 17 projects here
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Functional calculator with basic mathematical operations',
    technologies: ['React', 'CSS3'],
    screenshot: '/screenshots/calculator.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Real-time currency converter consuming external API',
    technologies: ['React', 'API', 'CSS3'],
    screenshot: '/screenshots/currency-converter.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'API'
  },
  {
    id: 'quotes',
    name: 'Quotes',
    description: 'Random quote generator',
    technologies: ['React', 'CSS3'],
    screenshot: '/screenshots/quotes.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Other'
  },
  {
    id: 'photo-album',
    name: 'Photo Album',
    description: 'Searchable photo gallery using Unsplash API',
    technologies: ['React', 'API', 'Axios'],
    screenshot: '/screenshots/photo-album-ai.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'API'
  },
  {
    id: 'markdown-viewer',
    name: 'Markdown Viewer',
    description: 'Markdown editor and viewer with real-time preview',
    technologies: ['React', 'Marked', 'CSS3'],
    screenshot: '/screenshots/markdown-viewer-ai.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  },
  {
    id: 'time-zone',
    name: 'Time Zone',
    description: 'World clock to check times across different time zones',
    technologies: ['React', 'CSS3'],
    screenshot: '/screenshots/time-zone.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  },
  {
    id: 'hash-game',
    name: 'Hash Game',
    description: 'Classic Tic-Tac-Toe game',
    technologies: ['React', 'CSS3'],
    screenshot: '/screenshots/hash-game.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Games'
  },
  {
    id: 'todo-redux',
    name: 'Todo Redux',
    description: 'Task manager using Redux for global state',
    technologies: ['React', 'Redux', 'Redux Toolkit'],
    screenshot: '/screenshots/todo-redux.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  }
]
