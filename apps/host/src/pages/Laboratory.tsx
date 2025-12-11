import { useEffect, useState } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import { MFEErrorBoundary } from '../components/MFEErrorBoundary'
import Spinner from '../components/Spinner'
import { MFEEvents, eventBus } from '../utils/eventBus'
import { type Project, projects } from './projectsData'

export default function Laboratory() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [iframeLoading, setIframeLoading] = useState(false)
  const [iframeError, setIframeError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Listen for messages from MFEs via postMessage
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security: verify origin
      if (event.origin !== 'http://localhost:5001') return

      // Handle MFE events via EventBus
      if (event.data.type) {
        eventBus.publish(event.data.type, event.data.payload)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Handle iframe load events
  const handleIframeLoad = () => {
    setIframeLoading(false)
    setIframeError(null)
  }

  const handleIframeError = () => {
    setIframeLoading(false)
    setIframeError('Erro ao carregar projeto')
  }

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
    setIframeLoading(true)
    setIframeError(null)
  }

  const categories = ['all', ...new Set(projects.map(p => p.category))]
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="laboratory">
      <header className="title-wrapper">
        <div className="title">
          <h1>
            <span>Laboratório</span>
          </h1>
          <p>
            Explore meus projetos desenvolvidos durante cursos e estudos. Cada projeto é uma
            aplicação funcional que você pode interagir.
          </p>
        </div>
      </header>

      {!selectedProject ? (
        <>
          {/* Filter buttons */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                type="button"
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <button
                key={project.id}
                className="project-card"
                type="button"
                onClick={() => handleProjectSelect(project)}
              >
                <div className="project-screenshot">
                  <img src={project.screenshot} alt={project.name} loading="lazy" />
                  <div className="project-overlay">
                    <button type="button" className="view-btn">
                      Ver Projeto
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        /* MFE Viewer with iframe - Industry Standard Practice */
        <div className="project-viewer">
          <div className="viewer-header">
            <div className="viewer-title">
              <h2>{selectedProject.name}</h2>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub />
                  <span>Ver Código</span>
                </a>
              )}
            </div>
            <button
              className="close-btn"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
            >
              <FaTimes />
            </button>
          </div>

          <div className="viewer-content">
            {/* MFE Error Boundary */}
            <MFEErrorBoundary mfeName={selectedProject.name}>
              {/* Loading State */}
              {iframeLoading && <Spinner />}

              {/* Error State */}
              {iframeError && (
                <div className="iframe-error">
                  <p>{iframeError}</p>
                  <button type="button" onClick={() => handleProjectSelect(selectedProject)}>
                    Tentar Novamente
                  </button>
                </div>
              )}

              {/* MFE iframe - Isolated Runtime */}
              <iframe
                src={`http://localhost:5001/${selectedProject.id}`}
                title={selectedProject.name}
                className="project-iframe"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ display: iframeLoading ? 'none' : 'block' }}
              />
            </MFEErrorBoundary>
          </div>
        </div>
      )}
    </div>
  )
}
