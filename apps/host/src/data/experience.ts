export interface Experience {
  /** Short range shown in the compact list (Home) */
  period: string
  /** Full range shown on About */
  dates: string
  role: string
  company: string
  summary: string
  highlights: string[]
  stack: string[]
}

// Career timeline from the CV, newest first. Home shows the first entries compactly; About shows all
export const experiences: Experience[] = [
  {
    period: '2026',
    dates: 'Fev 2026 — Jul 2026',
    role: 'Desenvolvedor Front-end Sênior',
    company: 'Ouribank (via Nexmuv)',
    summary:
      'Evolução e manutenção de plataformas financeiras de alta escala com React, TypeScript e micro-frontends, cuidando de performance, acessibilidade e modularização sem impactar outros domínios.',
    highlights: [
      'Liderei a migração de um micro-frontend de grande porte de Webpack para Vite, atualizando dezenas de dependências e substituindo bibliotecas legadas. O tempo de build caiu 70% e o carregamento inicial (LCP) melhorou.',
      'Integrei micro-frontends a serviços de BFF via GraphQL e REST, com Axios e TanStack Query.',
      'Implementei fluxos de estado complexos com Hooks, Redux, Zustand e Context API, além de lazy loading e fluxos em tempo real com WebSockets.',
      'Construí formulários complexos com React Hook Form e validação com Zod.',
      'Desenvolvi features a partir do Figma com componentes do Design System da empresa, usando Styled Components e Tailwind.',
      'Refatorei código legado para melhorar a reutilização de componentes, a legibilidade e a manutenção.',
      'Defini padrões de código, fiz code reviews para várias squads e mentoria para devs plenos e juniores.',
      'Escrevi testes unitários e de componentes com Jest e React Testing Library.',
      'Publiquei conteúdo estático via AWS CloudFront e trabalhei com Git e GitLab entre várias equipes.'
    ],
    stack: [
      'React',
      'TypeScript',
      'Micro-frontends',
      'Vite',
      'Redux',
      'Zustand',
      'TanStack Query',
      'GraphQL'
    ]
  },
  {
    period: '2024 — 2025',
    dates: 'Fev 2024 — Dez 2025',
    role: 'Desenvolvedor Front-end Sênior',
    company: 'Mercado Bitcoin (via bycoders_)',
    summary:
      'Arquitetura e desenvolvimento de funcionalidades críticas da plataforma de investimentos, com Vue 3 (Composition API), SSR com Vike e BFF.',
    highlights: [
      'Liderei tecnicamente a Nova Cover Letter: um template baseado em slots e um boilerplate reutilizável, adotado por 5 squads e produtos, que virou referência na empresa e reduziu o esforço para criar novas páginas.',
      'Participei da Nova Boleta, funcionalidade crítica do fluxo de investimentos. Usei Web Workers para manter as cotações de criptoativos em tempo real fora da thread principal e mentorei um dev júnior no projeto.',
      'Contribuí para a adoção de SSR, conciliando aplicações novas em Vue 3 com projetos legados em Vue 2 e Node.js.',
      'Desenvolvi e documentei componentes do Design System, incluindo Web Components, no Storybook e no Zeroheight, junto com UI/UX no Figma.',
      'Criei testes E2E com Cypress e Playwright e unitários com Vitest e Vue Test Utils, e participei da iniciativa para aumentar a cobertura de testes em todos os projetos.',
      'Implementei a arquitetura de eventos com Google Analytics e Insider.',
      'Trabalhei com i18n e múltiplas moedas, feature flags para lançamentos e migrações incrementais, e integração de módulos via WebView.',
      'Fiz melhorias contínuas de SEO, acessibilidade, Web Vitals e fidelidade ao design.',
      'Operei CI/CD com Jenkins e GitHub Actions, Docker, GCP e monitoramento de pods com Kubernetes (kubectl), num fluxo de release train com commits semânticos.'
    ],
    stack: ['Vue 3', 'Vike', 'Pinia', 'SSR', 'BFF', 'Web Workers', 'Storybook', 'Playwright']
  },
  {
    period: '2023 — 2024',
    dates: 'Jan 2023 — Fev 2024',
    role: 'Desenvolvedor Front-end Sênior',
    company: 'VML',
    summary:
      'Projetos web para clientes internacionais com React e TypeScript integrados a CMSs (Adobe Experience Manager e Drupal), em abordagem tradicional e headless.',
    highlights: [
      'Entreguei de ponta a ponta um projeto para um grande cliente internacional, no meu primeiro contato com o AEM.',
      'Criei dezenas de templates e componentes modulares em AEM e Drupal, que deram autonomia aos autores de conteúdo para montar páginas sem depender de desenvolvimento.',
      'Desenvolvi interfaces com React, Redux/Saga e TypeScript em AEM headless, junto com os times de UI e UX.',
      'No Drupal, customizei temas, templates Twig, Views, Blocks e Fields.',
      'Mentorei um dev pleno.',
      'Usei Cypress para testes E2E, Docker, Webpack e GitFlow com commits semânticos, com foco em SEO, acessibilidade e performance.'
    ],
    stack: ['React', 'TypeScript', 'Redux-Saga', 'AEM', 'Drupal', 'Twig', 'Cypress']
  },
  {
    period: '2022',
    dates: 'Mar 2022 — Dez 2022',
    role: 'Desenvolvedor Front-end',
    company: 'Infracommerce (via Maitha Tech)',
    summary:
      'Squad que mantinha e criava features numa arquitetura de micro-frontends. Pouco depois da minha entrada, a stack mudou de Vue.js para React.',
    highlights: [
      'Migrei e criei projetos em micro-frontends com React (Vite, Remix) e TypeScript.',
      'Participei da criação de um Design System baseado em Ant Design, documentado no Storybook.',
      'Mantive sistemas legados em Vue.js e Vuetify.',
      'Incentivei entregas pixel-perfect e fiz contribuições adotadas por outras squads.'
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Remix', 'Ant Design', 'Storybook']
  },
  {
    period: '2020 — 2022',
    dates: 'Jun 2020 — Abr 2022',
    role: 'Desenvolvedor Front-end',
    company: 'Ewave do Brasil',
    summary: 'Consultoria, com projetos para Locaweb, DOC88 e CCEE.',
    highlights: [
      'Locaweb: participei da concepção do Design System desde o início, com as equipes de UI/UX, decidindo design tokens, hierarquia visual e consistência. Era baseado em Vuetify (Vue 2), com props, eventos e testes unitários em todos os componentes.',
      'Locaweb: estabeleci a validação de acessibilidade dos componentes, com testes e verificação em leitores de tela, e documentei o projeto na Wiki do Azure DevOps com dados da pipeline e do board.',
      'DOC88: sistema em Vue 2, Nuxt (SSR) e Vuex, seguindo Atomic Design sobre um design system interno com tokens em Sass. Também participei de projetos PHP com Laravel.',
      'CCEE (Câmara de Comercialização de Energia Elétrica): sistema em Angular com Material Design, consumindo um design system interno.'
    ],
    stack: ['Vue 2', 'Vuetify', 'Nuxt', 'Vuex', 'Angular', 'Cypress', 'Azure DevOps']
  },
  {
    period: '2019 — 2020',
    dates: 'Abr 2019 — Mai 2020',
    role: 'Desenvolvedor Front-end',
    company: 'Saraiva',
    summary: 'Engenharia do e-commerce, durante a migração da plataforma de Magento para VTEX.',
    highlights: [
      'Criei componentes Vue 2 em arquitetura headless, consumindo APIs REST com Axios.',
      'Montei templates dinâmicos com Handlebars.',
      'Trabalhei com componentização, pixel-perfect, responsividade e SEO.'
    ],
    stack: ['Vue 2', 'VTEX', 'Handlebars', 'Axios', 'Sass']
  },
  {
    period: '2018 — 2019',
    dates: 'Mai 2018 — Mar 2019',
    role: 'Desenvolvedor Front-end Pleno',
    company: 'BTG Pactual (via BRQ)',
    summary: 'Portal institucional e plataforma de investimentos do banco.',
    highlights: [
      'Liderei a frente de manutenção e novas features do portal institucional, com foco em SEO, performance e responsividade.',
      'Desenvolvi o novo portal institucional em Angular 7 com Material Design.',
      'Apoiei a manutenção da plataforma de investimentos em AngularJS e Angular 7.',
      'Publiquei com AWS S3 e criei templates dinâmicos para WordPress.'
    ],
    stack: ['Angular 7', 'AngularJS', 'Material Design', 'Sass', 'AWS S3']
  },
  {
    period: '2017 — 2018',
    dates: 'Ago 2017 — Abr 2018',
    role: 'Desenvolvedor Front-end',
    company: 'Urban Summer',
    summary:
      'Agência digital. Fiz desde landing pages até projetos grandes para clientes como Banco Safra, Banco Santander e Sapore.',
    highlights: [
      'Montei workflows com Gulp e Grunt em Node.js e fluxos de CSS com Sass e Less.',
      'Usei Local Storage, IndexedDB, sessão e cookies, e consumi APIs REST.',
      'Trabalhei com responsividade, SEO e Git com Bitbucket.'
    ],
    stack: ['JavaScript', 'jQuery', 'Sass', 'Less', 'Gulp', 'WordPress']
  },
  {
    period: '2013 — 2016',
    dates: 'Out 2013 — Mar 2016',
    role: 'Desenvolvedor Front-end',
    company: 'Vitamina Web',
    summary:
      'Sites, aplicações web e soluções mobile com foco em WordPress, para clientes como Techban.',
    highlights: [
      'Desenvolvi templates dinâmicos para WordPress, sites multi-idioma e integrações com a WordPress REST API.',
      'Criei lojas virtuais em WooCommerce, Magento e Loja Integrada.',
      'Trabalhei com responsividade, animações, pixel-perfect e SEO, usando Bootstrap e Foundation, e mantive projetos PHP.'
    ],
    stack: ['WordPress', 'WooCommerce', 'Magento', 'PHP', 'Sass', 'Bootstrap']
  },
  {
    period: '2012 — 2014',
    dates: 'Mai 2012 — Out 2014',
    role: 'Desenvolvedor Front-end / Designer',
    company: 'Jota3w Comunicação Digital',
    summary: 'Entrei como front-end e depois passei um ano como designer.',
    highlights: [
      'Codifiquei e otimizei sites cross-browser, com Sass e Less.',
      'Fui responsável pela equipe de SEO.',
      'Criei layouts para sites, aplicativos mobile e e-mail marketing.',
      'Atendi clientes como Editora Abril, Odebrecht e Celite.'
    ],
    stack: ['HTML', 'CSS', 'Sass', 'Less', 'SEO', 'Photoshop']
  },
  {
    period: '2011 — 2012',
    dates: 'Fev 2011 — Abr 2012',
    role: 'Web Designer',
    company: 'Infodahora Soluções Web',
    summary: 'Muitos projetos pequenos, do layout ao desenvolvimento.',
    highlights: [
      'Criei layouts, identidades visuais, newsletters e ilustrações no Fireworks e no Photoshop.',
      'Desenvolvi sites em Flash e em HTML tableless, cross-browser e com SEO.'
    ],
    stack: ['HTML', 'CSS', 'Flash', 'Photoshop', 'Fireworks']
  }
]

export interface Education {
  course: string
  school: string
  status: string
}

export const education: Education[] = [
  {
    course: 'Pós-graduação em Arquitetura de Software Distribuído',
    school: 'PUC Minas',
    status: 'Conclusão prevista para set 2027'
  },
  {
    course: 'Graduação em Design Gráfico',
    school: 'Universidade Paulista',
    status: 'Concluída em 2014'
  },
  {
    course: 'Técnico em Informática (ênfase em programação)',
    school: 'ETEC',
    status: 'Concluído em 2008'
  }
]
