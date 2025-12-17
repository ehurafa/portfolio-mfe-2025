import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import Card from '../components/Card'
import { MFEErrorBoundary } from '../components/MFEErrorBoundary'
import Spinner from '../components/Spinner'
import { MFEEvents, eventBus } from '../utils/eventBus'
import { type Project, projects } from './projectsData'

// Animation variants
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
}

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
    setIframeError('Erro ao carregar projeto')
  }

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
    setIframeLoading(true)
    setIframeError(null)
  }

  const categories = ['all', ...new Set(projects.map(p => p.category))]
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  // Construct iframe source
  const iframeSrc = selectedProject
    ? selectedProject.projectUrl || `${PROJECTS_BASE_URL}/${selectedProject.id}`
    : ''

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
        </div>
        <p>
          Explore meus projetos desenvolvidos durante cursos e estudos. Cada projeto é uma aplicação
          funcional que você pode interagir.
        </p>
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
          <motion.div
            className="projects-grid"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(project => (
              <motion.div key={project.id} variants={cardVariants}>
                <Card
                  thumbnail={project.screenshot}
                  title={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  onClick={() => handleProjectSelect(project)}
                />
              </motion.div>
            ))}
          </motion.div>
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
