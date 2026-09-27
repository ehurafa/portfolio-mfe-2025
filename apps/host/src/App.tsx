import { MotionConfig, motion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { usePageTracking } from './hooks/usePageTracking'
import { useScrollToTop } from './hooks/useScrollToTop'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Home from './pages/Home'
import Laboratory from './pages/Laboratory'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './pages/Projects'

export default function App() {
  usePageTracking()
  useScrollToTop()
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user">
      <div className="layout">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        {/* Single authored motion: each route settles in from an already-visible state */}
        <motion.main
          key={location.pathname}
          className="content"
          initial={{ opacity: 0.35, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/certificados" element={<Certificates />} />
            <Route path="/sobre-mim" element={<About />} />
            <Route path="/laboratorio" element={<Laboratory />} />
            <Route path="/projeto/:slug" element={<ProjectDetails />} />
          </Routes>
        </motion.main>
      </div>
    </MotionConfig>
  )
}
