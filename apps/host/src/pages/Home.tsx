import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ExperienceList from '../components/ExperienceList'
import { experiences } from '../data/experience'
import { projects } from './projectsData'

// Featured section is hidden for now; flip to true to show it again
const SHOW_FEATURED_PROJECTS = false
const FEATURED_IDS = ['aiva-test', 'blog-angular', 'ovgs']

const featuredProjects = projects.filter(project => FEATURED_IDS.includes(project.id))

// Only public deploys get an "Abrir" link; local fallbacks (localhost) are hidden
const isPublicUrl = (url?: string) => !!url && url.startsWith('https://')

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">Rafael Gomes, desenvolvedor front-end</h1>

      <section className="section intro" aria-labelledby="sobre-title">
        <h2 id="sobre-title" className="section-title">
          Sobre
        </h2>
        <p>
          Sou desenvolvedor front-end sênior há mais de 14 anos. Meu trabalho mais recente foi no{' '}
          <strong>Ouribank</strong>, mantendo e evoluindo plataformas financeiras de alta escala com
          micro-frontends, React e TypeScript.
        </p>
        <p>
          Trabalho principalmente com React, Vue e Angular. Escrevo código que outra pessoa consegue
          manter, acompanho o tempo de carregamento e as métricas do Lighthouse enquanto desenvolvo
          e sigo o layout até o último pixel.
        </p>
        <p>
          Este site também é um host de micro-frontends: os projetos do laboratório rodam isolados
          em iframes e conversam com a página por um EventBus.
        </p>
      </section>

      {SHOW_FEATURED_PROJECTS && (
        <section className="section" aria-labelledby="projetos-title">
          <h2 id="projetos-title" className="section-title">
            Projetos em destaque
          </h2>

          {featuredProjects.map(project => (
            <article key={project.id} className="featured-project">
              <div className="featured-project__thumb">
                <img
                  src={project.screenshot}
                  alt={`Tela do projeto ${project.name}`}
                  loading="lazy"
                />
              </div>
              <div>
                <h3>{project.name}</h3>
                <p className="featured-project__description">{project.description}</p>
                <ul className="tech-list" aria-label="Tecnologias">
                  {project.technologies.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="featured-project__links">
                  {isPublicUrl(project.projectUrl) && (
                    <a href={project.projectUrl} target="_blank" rel="noreferrer">
                      Abrir projeto <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      Código no GitHub <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          <Link to="/projetos" className="section-link">
            Ver todos os projetos <FiArrowRight aria-hidden="true" />
          </Link>
        </section>
      )}

      <section className="section" aria-labelledby="experiencia-title">
        <h2 id="experiencia-title" className="section-title">
          Experiência
        </h2>
        <ExperienceList items={experiences} />
        <Link to="/sobre-mim" className="section-link">
          Ver trajetória completa <FiArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
