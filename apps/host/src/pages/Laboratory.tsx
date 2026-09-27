import { useEffect, useState } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import Card from '../components/Card'
import { MFEErrorBoundary } from '../components/MFEErrorBoundary'
import Spinner from '../components/Spinner'
import { MFEEvents, eventBus } from '../utils/eventBus'
import { type Project, projects } from './projectsData'

export default function Laboratory() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('Todos')
  const [loading, setLoading] = useState(true)
  const [iframeLoading, setIframeLoading] = useState(false)
  const [iframeError, setIframeError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const PROJECTS_BASE_URL = import.meta.env.VITE_PROJECTS_URL || 'http://localhost:5001'

  // Listen for messages from MFEs via postMessage
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security: verify origin
      // Allow messages from the base projects URL OR the specific project URL
      // In production, you might want to be more strict or use a whitelist
      const allowedOrigins = [PROJECTS_BASE_URL]
      if (selectedProject?.projectUrl) {
        allowedOrigins.push(new URL(selectedProject.projectUrl).origin)
      }

      // Also allow localhost:8080 implicitly for development convenience if needed
      if (!allowedOrigins.includes(event.origin) && event.origin !== 'http://localhost:8080') return

      // Handle MFE events via EventBus
      if (event.data.type) {
        eventBus.publish(event.data.type, event.data.payload)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [selectedProject]) // Re-bind listener when selectedProject changes to update allowed origins

  // Handle iframe load events
  const handleIframeLoad = () => {
    setIframeLoading(false)
    setIframeError(null)
  }

  const handleIframeError = () => {
    setIframeLoading(false)
    setIframeError('Não foi possível carregar este projeto.')
  }

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
    setIframeLoading(true)
    setIframeError(null)
  }

  const frameworks = ['Todos', 'React', 'Vue', 'Angular']

  const filteredProjects =
    filter === 'Todos'
      ? projects
      : projects.filter(p =>
          p.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
        )

  // Construct iframe source
  const iframeSrc = selectedProject
    ? selectedProject.projectUrl || `${PROJECTS_BASE_URL}/#/${selectedProject.id}`
    : ''

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="laboratory">
      <header className="page-header">
        <h1>Laboratório</h1>
        <p>
          Projetos de cursos e estudos em React, Vue e Angular. Cada um roda isolado num iframe e
          você pode usar direto aqui.
        </p>
      </header>

      {!selectedProject ? (
        <>
          {/* Filter buttons */}
          <fieldset className="category-filter" aria-label="Filtrar por framework">
            {frameworks.map(fw => (
              <button
                key={fw}
                className={`filter-btn ${filter === fw ? 'active' : ''}`}
                type="button"
                aria-pressed={filter === fw}
                onClick={() => setFilter(fw)}
              >
                {fw}
              </button>
            ))}
          </fieldset>

          {/* Projects Grid */}
          <ul className="card-list">
            {filteredProjects.map(project => (
              <li key={project.id}>
                <Card
                  thumbnail={project.screenshot}
                  title={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  onClick={() => handleProjectSelect(project)}
                />
              </li>
            ))}
          </ul>
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
                  <span>Código no GitHub</span>
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
                    Tentar de novo
                  </button>
                </div>
              )}

              {/* MFE iframe - Isolated Runtime */}
              <iframe
                src={iframeSrc}
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
