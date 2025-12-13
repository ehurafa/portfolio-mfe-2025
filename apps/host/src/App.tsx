import { Route, Routes } from 'react-router-dom'
import { motion } from 'motion/react'
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Laboratory from './pages/Laboratory'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './pages/Projects'

// Layout animation variants
const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
}

const contentVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: 'easeOut' as const
    }
  }
}

export default function App() {
  return (
    <div className="layout">
      <motion.aside
        className="sidebar"
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
      >
        <Sidebar />
      </motion.aside>
      <motion.main
        className="content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/certificados" element={<Certificates />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/laboratorio" element={<Laboratory />} />
          <Route path="/projeto/:slug" element={<ProjectDetails />} />
        </Routes>
      </motion.main>
    </div>
  )
}
