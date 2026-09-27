export interface Experience {
  period: string
  role: string
  company: string
  description: string
  stack: string[]
}

// Career timeline shared by Home (summary) and About (full)
export const experiences: Experience[] = [
  {
    period: '2026 — Atual',
    role: 'Senior Front-end Developer',
    company: 'Ouribank',
    description:
      'Manutenção e evolução de plataformas financeiras de alta escala. Cuido de performance, acessibilidade e modularização do front-end do banco, que usa micro-frontends, React, TypeScript, Redux, Zustand, GraphQL e APIs REST/BFF.',
    stack: ['React', 'TypeScript', 'Micro-frontends', 'Redux', 'Zustand', 'GraphQL']
  },
  {
    period: '2024 — 2026',
    role: 'Desenvolvedor Front-end Sênior',
    company: 'bycoders_ · Mercado Bitcoin',
    description:
      'Módulos em Vue 3 com renderização server-side e BFF, manutenção do design system e ajustes de Web Vitals, num time ágil.',
    stack: ['Vue 3', 'SSR', 'BFF', 'Design System']
  },
  {
    period: '2023 — 2024',
    role: 'Sênior Front-end Developer',
    company: 'VML',
    description:
      'Front-end headless com AEM e React.js. Montei interfaces complexas com Redux/Saga e TypeScript em projetos grandes para clientes globais.',
    stack: ['React', 'AEM', 'Redux-Saga', 'TypeScript']
  },
  {
    period: '2022',
    role: 'Front-end Developer',
    company: 'Maitha Tech · Infracommerce',
    description:
      'Criei um design system, migrei projetos para React (Vite, Remix), implementei microfrontends e documentei os componentes no Storybook.',
    stack: ['React', 'Vite', 'Remix', 'Storybook']
  }
]
