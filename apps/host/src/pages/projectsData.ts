export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  screenshot: string
  githubUrl?: string
  category: 'UI' | 'Data' | 'Games' | 'Tools' | 'API' | 'Other'
}

// Registry of all projects - you'll add your real projects here
export const projects: Project[] = [
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
    id: 'calculator',
    name: 'Calculator',
    description: 'Calculadora funcional com operações matemáticas básicas',
    technologies: ['React', 'JavaScript', 'CSS3'],
    screenshot: '/screenshots/calculator.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  },
  {
    id: 'timer',
    name: 'Timer',
    description: 'Timer funcional com operações matemáticas básicas',
    technologies: ['React', 'JavaScript', 'CSS3'],
    screenshot: '/screenshots/timer.png',
    githubUrl: 'https://github.com/ehurafa/20-react-projects',
    category: 'Tools'
  }
  // TODO: Add your remaining 17 projects here
]
