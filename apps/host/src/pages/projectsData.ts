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

// Registry of all projects - you'll add your real projects here
export const projects: Project[] = [
  {
    id: 'citacoes',
    name: 'Citações',
    description: 'Gerador de citações inspiradoras com Vue 2',
    technologies: ['Vue 2', 'CSS3'],
    screenshot: '/screenshots/citacoes.png', // Placeholder, using default fallback
    // githubUrl: '', // Add if available
    projectUrl: import.meta.env.VITE_CITACOES_URL || 'http://localhost:8080', // Configurable via .env
    category: 'Other'
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
    screenshot: '/screenshots/photo-album.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'API'
  },
  {
    id: 'markdown-viewer',
    name: 'Markdown Viewer',
    description: 'Markdown editor and viewer with real-time preview',
    technologies: ['React', 'Marked', 'CSS3'],
    screenshot: '/screenshots/markdown-viewer.png',
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
