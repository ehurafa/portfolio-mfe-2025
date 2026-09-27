import { HiCheckCircle } from 'react-icons/hi'
import ExperienceList from '../components/ExperienceList'
import { experiences } from '../data/experience'

const techStack = [
  'React',
  'Vue.js',
  'Angular',
  'TypeScript',
  'Next.js',
  'Vite',
  'Node.js',
  'SASS',
  'Cypress',
  'Docker',
  'Storybook',
  'Git',
  'System Design'
]

const softSkills = [
  'Comunicação assertiva',
  'Resolução de problemas',
  'Atenção aos detalhes',
  'Trabalho em equipe'
]

export default function About() {
  return (
    <>
      <header className="page-header">
        <h1>Minha história no front-end</h1>
      </header>

      <section className="section about-story" aria-label="Resumo">
        <p>
          Sou <strong>Rafael Gomes</strong>, desenvolvedor front-end. Trabalho com JavaScript há
          mais de 14 anos, quase sempre com <strong>React, Vue ou Angular</strong>, e gosto de
          pensar na arquitetura antes de escrever o primeiro componente.
        </p>
        <p>
          Sigo Clean Code e SOLID, quebro a interface em componentes pequenos e já trabalhei com
          design systems, microfrontends, web components e SSR.
        </p>
        <p>
          Hoje estou no <strong>Ouribank</strong> como desenvolvedor front-end sênior, mantendo e
          evoluindo plataformas financeiras de alta escala. Cuido de performance, acessibilidade e
          modularização num front-end de micro-frontends em React, com Redux e Zustand para estado,
          GraphQL, REST e BFF para dados e um design system para os componentes.
        </p>
        <p>
          Sou formado em design gráfico e em programação. Por isso olho o acabamento visual com o
          mesmo cuidado que dou à estrutura do código.
        </p>
      </section>

      <section className="section" aria-labelledby="trajetoria-title">
        <h2 id="trajetoria-title" className="section-title">
          Trajetória profissional
        </h2>
        <ExperienceList items={experiences} showDescription />
      </section>

      <section className="section" aria-labelledby="stack-title">
        <h2 id="stack-title" className="section-title">
          Tech stack
        </h2>
        <ul className="tech-list">
          {techStack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="soft-title">
        <h2 id="soft-title" className="section-title">
          Soft skills
        </h2>
        <ul className="skill-list">
          {softSkills.map(skill => (
            <li key={skill}>
              <HiCheckCircle aria-hidden="true" /> {skill}
            </li>
          ))}
        </ul>
        <p className="studying">
          Estudando agora: <strong>System Design</strong> e <strong>Microfrontends</strong>.
        </p>
      </section>
    </>
  )
}
