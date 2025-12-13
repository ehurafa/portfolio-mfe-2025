import type { WPPost } from './wp'

// Mock data para projetos
export const mockProjects: WPPost[] = [
  {
    id: 1,
    slug: 'portfolio-project',
    content: {
      rendered: '<p>Um portfólio moderno desenvolvido com React e TypeScript</p>'
    },
    acf: {
      data_post: '2024-01-15',
      title_post: 'Portfolio Moderno',
      post_content: 'Um portfólio moderno desenvolvido com React, TypeScript e Vite',
      image_post: {
        url: 'https://placehold.co/600x400/6366f1/white?text=Portfolio',
        sizes: {
          large: 'https://placehold.co/600x400/6366f1/white?text=Portfolio',
          medium: 'https://placehold.co/400x300/6366f1/white?text=Portfolio'
        }
      },
      list_of_technologies: [
        { term_id: 1, name: 'React', slug: 'react' },
        { term_id: 2, name: 'TypeScript', slug: 'typescript' },
        { term_id: 3, name: 'Vite', slug: 'vite' }
      ]
    }
  },
  {
    id: 2,
    slug: 'ecommerce-app',
    content: {
      rendered: '<p>Aplicação de e-commerce com carrinho de compras</p>'
    },
    acf: {
      data_post: '2024-02-20',
      title_post: 'E-commerce App',
      post_content: 'Sistema de e-commerce completo com carrinho de compras e checkout',
      image_post: {
        url: 'https://placehold.co/600x400/10b981/white?text=E-commerce',
        sizes: {
          large: 'https://placehold.co/600x400/10b981/white?text=E-commerce',
          medium: 'https://placehold.co/400x300/10b981/white?text=E-commerce'
        }
      },
      list_of_technologies: [
        { term_id: 4, name: 'React', slug: 'react' },
        { term_id: 5, name: 'Node.js', slug: 'nodejs' },
        { term_id: 6, name: 'MongoDB', slug: 'mongodb' }
      ]
    }
  },
  {
    id: 3,
    slug: 'task-manager',
    content: {
      rendered: '<p>Gerenciador de tarefas com drag and drop</p>'
    },
    acf: {
      data_post: '2024-03-10',
      title_post: 'Task Manager',
      post_content: 'Aplicação para gerenciamento de tarefas com funcionalidade drag and drop',
      image_post: {
        url: 'https://placehold.co/600x400/f59e0b/white?text=Task+Manager',
        sizes: {
          large: 'https://placehold.co/600x400/f59e0b/white?text=Task+Manager',
          medium: 'https://placehold.co/400x300/f59e0b/white?text=Task+Manager'
        }
      },
      list_of_technologies: [
        { term_id: 7, name: 'Vue.js', slug: 'vue' },
        { term_id: 8, name: 'TypeScript', slug: 'typescript' },
        { term_id: 9, name: 'Tailwind', slug: 'tailwind' }
      ]
    }
  },
  {
    id: 4,
    slug: 'weather-dashboard',
    content: {
      rendered: '<p>Dashboard de previsão do tempo</p>'
    },
    acf: {
      data_post: '2024-04-05',
      title_post: 'Weather Dashboard',
      post_content: 'Dashboard interativo para visualização de previsão do tempo',
      image_post: {
        url: 'https://placehold.co/600x400/3b82f6/white?text=Weather',
        sizes: {
          large: 'https://placehold.co/600x400/3b82f6/white?text=Weather',
          medium: 'https://placehold.co/400x300/3b82f6/white?text=Weather'
        }
      },
      list_of_technologies: [
        { term_id: 10, name: 'React', slug: 'react' },
        { term_id: 11, name: 'D3.js', slug: 'd3' },
        { term_id: 12, name: 'API REST', slug: 'api-rest' }
      ]
    }
  },
  {
    id: 5,
    slug: 'blog-platform',
    content: {
      rendered: '<p>Plataforma de blog com CMS</p>'
    },
    acf: {
      data_post: '2024-05-12',
      title_post: 'Blog Platform',
      post_content: 'Plataforma de blog completa com sistema de gerenciamento de conteúdo',
      image_post: {
        url: 'https://placehold.co/600x400/8b5cf6/white?text=Blog',
        sizes: {
          large: 'https://placehold.co/600x400/8b5cf6/white?text=Blog',
          medium: 'https://placehold.co/400x300/8b5cf6/white?text=Blog'
        }
      },
      list_of_technologies: [
        { term_id: 13, name: 'Next.js', slug: 'nextjs' },
        { term_id: 14, name: 'TypeScript', slug: 'typescript' },
        { term_id: 15, name: 'PostgreSQL', slug: 'postgresql' }
      ]
    }
  },
  {
    id: 6,
    slug: 'social-media-clone',
    content: {
      rendered: '<p>Clone de rede social</p>'
    },
    acf: {
      data_post: '2024-06-18',
      title_post: 'Social Media Clone',
      post_content: 'Clone de rede social com posts, likes e comentários',
      image_post: {
        url: 'https://placehold.co/600x400/ec4899/white?text=Social',
        sizes: {
          large: 'https://placehold.co/600x400/ec4899/white?text=Social',
          medium: 'https://placehold.co/400x300/ec4899/white?text=Social'
        }
      },
      list_of_technologies: [
        { term_id: 16, name: 'React', slug: 'react' },
        { term_id: 17, name: 'Firebase', slug: 'firebase' },
        { term_id: 18, name: 'Tailwind', slug: 'tailwind' }
      ]
    }
  }
]

// Mock data para certificados (já existente no componente, mas vamos centralizar)
export const mockCertificates = [
  {
    id: 1,
    title: 'Next.js',
    description: 'NextJS do zero ao avançado na pratica 2025',
    pdf: '/certificates/next-2.pdf',
    thumb: '/certificates/next-2.png',
    tags: ['udemy']
  },
  {
    id: 2,
    title: 'React',
    description: 'React do Zero a Maestria (c/ hooks, router, API, Projetos)',
    pdf: '/certificates/react-2.pdf',
    thumb: '/certificates/react-2.jpg',
    tags: ['udemy']
  },
  {
    id: 3,
    title: 'TypeScript',
    description: 'Dominando o Typescript',
    pdf: '/certificates/ts.pdf',
    thumb: '/certificates/typescript.jpg',
    tags: ['udemy']
  },
  {
    id: 4,
    title: 'Vue 3',
    description: 'Vue 3 Completo com Composition API, Vuex & Vue Router',
    pdf: '/certificates/vue-3.pdf',
    thumb: '/certificates/vue-3.jpg',
    tags: ['udemy']
  }
]

// Mock data para laboratório (já existente no projectsData, mantemos separado)
export const mockLaboratoryProjects = [
  {
    id: 'd3-charts',
    name: 'D3 Chart Explorer',
    description: 'Explorador interativo de visualizações D3.js',
    category: 'Data Visualization',
    technologies: ['D3.js', 'React', 'TypeScript'],
    screenshot: 'https://placehold.co/600x400/6366f1/white?text=D3+Charts',
    githubUrl: 'https://github.com/example/d3-charts'
  },
  {
    id: 'three-js',
    name: 'Three.js Gallery',
    description: 'Galeria de animações 3D com Three.js',
    category: '3D Graphics',
    technologies: ['Three.js', 'WebGL', 'React'],
    screenshot: 'https://placehold.co/600x400/10b981/white?text=Three.js',
    githubUrl: 'https://github.com/example/threejs-gallery'
  },
  {
    id: 'animations',
    name: 'CSS Animations Lab',
    description: 'Laboratório de animações CSS avançadas',
    category: 'CSS',
    technologies: ['CSS3', 'SCSS', 'React'],
    screenshot: 'https://placehold.co/600x400/f59e0b/white?text=Animations',
    githubUrl: 'https://github.com/example/css-animations'
  }
]
