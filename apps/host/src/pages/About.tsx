import { useEffect, useState } from 'react'
import { VscPreview } from 'react-icons/vsc'
import { HiCheckCircle, HiLightningBolt, HiUserGroup } from 'react-icons/hi'
import { MdOutlineFileDownload } from 'react-icons/md'
import { FiGithub, FiMail } from 'react-icons/fi'
import { BiCodeBlock } from 'react-icons/bi'
import { FaClock, FaRocket, FaCodeBranch, FaCoffee } from 'react-icons/fa'
import Spinner from '../components/Spinner'

export default function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="about-page">
      {/* Tier 1: Hero Section (Profile + Intro + JSON) */}
      <section className="about-hero-grid">
        <header className="about-header glass-card">
          <div className="header-info">
            <header className="title-wrapper">
              <div className="title">
                <h1>
                  <VscPreview />{' '}
                  <span>
                    Minha História
                    <br /> <span className="gradient-text">no Front-End</span>
                  </span>
                </h1>
              </div>
            </header>

            <p className="summary">
              Sou <b>Rafael Gomes, Desenvolvedor Front-end</b> com mais de 14 anos de experiência no
              ecossistema <b>JavaScript</b>, criando interfaces{' '}
              <b>escaláveis, performáticas e sustentáveis</b>. Especialista em{' '}
              <b>React, Vue e Angular</b>, aplico conceitos de <b>arquitetura avançada</b> e{' '}
              <b>padrões de projeto</b> para desenvolver produtos <b>robustos, manuteníveis</b> e
              voltados à <b>experiência do usuário</b>.
            </p>

            <p className="summary">
              Baseio meu trabalho em princípios como <b>Clean Code, SOLID</b> e{' '}
              <b>componentização eficiente</b>, além de atuar com{' '}
              <b>Design Systems, Microfrontends, Web Components, SSR</b> e{' '}
              <b>modularização inteligente</b>.
            </p>

            <p className="summary">
              No <b>Mercado Bitcoin</b>, contribuo para a evolução de módulos <b>Vue.js</b>,
              melhoria do <b>Design System</b>, implementação de <b>padrões de UI/UX</b> e
              integrações analíticas em ambiente <b>Kubernetes</b> sob arquitetura <b>BFF</b>.
            </p>

            <p className="summary">
              Com formação em <b>Design Gráfico</b> e <b>Programação</b>, combino visão estética e
              engenharia para criar <b>interfaces consistentes e fluídas</b>, sempre buscando{' '}
              <b>elevar o nível técnico</b> dos produtos e construir aplicações{' '}
              <b>rápidas, seguras e bem estruturadas</b>.
            </p>
            <div className="header-actions">
              <a href="#" className="btn btn-primary">
                <MdOutlineFileDownload /> Download CV
              </a>
              <a
                href="https://github.com/rflrafa"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-icon"
              >
                <FiGithub />
              </a>
              <a href="mailto:rafarfl2010@gmail.com" className="btn btn-primary btn-icon">
                <FiMail />
              </a>
            </div>
          </div>
        </header>

        <div className="code-card-wrapper">
          <div className="code-card glass-card">
            <div className="window-controls">
              <span />
              <span />
              <span />
              <div className="filename">about_me.json</div>
            </div>
            <pre>
              <span className="keyword">const</span> <span className="property">profile</span> =
              &#123;
              <br />
              &nbsp;&nbsp;<span className="property">name</span>:{' '}
              <span className="string">'Rafael'</span>,
              <br />
              &nbsp;&nbsp;<span className="property">role</span>:{' '}
              <span className="string">'Front-end Engineer'</span>,
              <br />
              &nbsp;&nbsp;<span className="property">experience</span>:{' '}
              <span className="number">15</span>,
              <br />
              &nbsp;&nbsp;<span className="property">coffee</span>:{' '}
              <span className="boolean">true</span>,
              <br />
              &nbsp;&nbsp;<span className="property">bugs</span>: <span className="number">0</span>,
              <br />
              &nbsp;&nbsp;<span className="property">hobbies</span>: [
              <span className="string">'Design'</span>, <span className="string">'UI/UX'</span>]
              <br />
              &#125;;
            </pre>
          </div>
        </div>
      </section>

      {/* Tier 2: Stats Grid Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card glass-card">
            <FaClock className="icon" />
            <span className="label">Anos de Experiência</span>
            <span className="value">15+</span>
          </div>
          <div className="stat-card glass-card">
            <FaRocket className="icon" />
            <span className="label">Projetos Entregues</span>
            <span className="value">50+</span>
          </div>
          <div className="stat-card glass-card">
            <FaCodeBranch className="icon" />
            <span className="label">Commits (2024)</span>
            <span className="value">1.8k</span>
          </div>
          <div className="stat-card glass-card">
            <FaCoffee className="icon" />
            <span className="label">Cafés / Dia</span>
            <span className="value">∞</span>
          </div>
        </div>
      </section>

      {/* Tier 3: Main Content (Timeline + Sidebar) */}
      <div className="about-main-layout">
        <section className="experience-section">
          <h2 className="section-title">
            <BiCodeBlock /> Trajetória Profissional
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot">
                <BiCodeBlock />
              </div>
              <div className="item-header">
                <h3>Desenvolvedor Front-end Sênior</h3>
                <span className="date">2024 - Atual</span>
              </div>
              <span className="company">bycoders_ | Mercado Bitcoin</span>
              <p className="description">
                Desenvolvimento de módulos em arquitetura Server-Side com BFF (Vue 3), manutenção do
                Design System e otimização de performance Web Vitals. Atuação em ambiente ágil com
                foco em escalabilidade e usabilidade.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <BiCodeBlock />
              </div>
              <div className="item-header">
                <h3>Sênior Front-end Developer</h3>
                <span className="date">2023 - 2024</span>
              </div>
              <span className="company">VML</span>
              <p className="description">
                Desenvolvimento Headless com AEM e React.js. Construção de interfaces complexas com
                Redux/Saga e TypeScript, colaborando em projetos de grande escala para clientes
                globais.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot">
                <BiCodeBlock />
              </div>
              <div className="item-header">
                <h3>Front-end Developer</h3>
                <span className="date">2022 - 2022</span>
              </div>
              <span className="company">Maitha Tech | Infracommerce</span>
              <p className="description">
                Criação de Design System e migração de projetos para React (Vite, Remix).
                Implementação de arquiteturas de microfrontends e documentação com Storybook.
              </p>
            </div>
          </div>
        </section>

        {/* Sidebar Sections (pinned only to bottom section) */}
        <aside className="about-sidebar">
          <section className="sidebar-section">
            <h2>
              <HiLightningBolt /> Tech Stack
            </h2>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">Vue.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Next.js</span>
              <span className="tag">Vite</span>
              <span className="tag">Node.js</span>
              <span className="tag">SASS</span>
              <span className="tag">Cypress</span>
              <span className="tag">Docker</span>
              <span className="tag">System Design</span>
              <span className="tag">Storybook</span>
              <span className="tag">Git</span>
            </div>
          </section>

          <section className="sidebar-section">
            <div className="soft-skills-card glass-card">
              <h2>
                <HiUserGroup /> Soft Skills
              </h2>
              <ul>
                <li>
                  <HiCheckCircle /> Comunicação Assertiva
                </li>
                <li>
                  <HiCheckCircle /> Resolução de Problemas
                </li>
                <li>
                  <HiCheckCircle /> Atenção aos Detalhes
                </li>
                <li>
                  <HiCheckCircle /> Trabalho em Equipe
                </li>
              </ul>

              <div className="currently-studying">
                <span className="label">Atualmente Estudando</span>
                <div className="study-tags">
                  <span>System Design</span>
                  <span>Microfrontends</span>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
